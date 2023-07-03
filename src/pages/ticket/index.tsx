import { useForm, SubmitHandler } from "react-hook-form";
import TicketService from "@/services/ticketService";
import toast from "react-hot-toast";
import { TicketForm } from "@/interfaces/ticket";
import SpaceService from "@/services/spaceService";
import { ISpace } from "@/interfaces/space";
import { useEffect, useState } from "react";

export default function Ticket() {
  const [spaces, setSpaces] = useState<ISpace[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TicketForm>({
    defaultValues: {
      username: "",
      type: "",
      allowedSpaces: [""],
    },
  });

  useEffect(() => {
    SpaceService.getAllSpaces()
      .then((spacesData) => {
        setSpaces(spacesData);
        console.log("🚀 ~ file: index.tsx:11 ~ Ticket ~ spaces:", spaces);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const onSubmit: SubmitHandler<TicketForm> = (formData) => {
    TicketService.createTicket(formData)
      .then((response) => {
        console.log("🚀 ~ file: index.tsx:27 ~ .then ~ response:", response);
        if (response.status === 201) {
          toast.success("Ticket was registered !", { duration: 3000 });
        }
      })
      .catch((err) => {
        console.log("🚀 ~ file: index.tsx:36 ~ Register ~ err:", err);
        toast.error("Error", { duration: 3000 });
      });
  };

  return (
    <form
      className="flex flex-col border p-5 m-5 items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className="border p-2 m-5"
        {...register("username", {
          minLength: 2,
          required: { value: true, message: "This is required" },
        })}
        placeholder="Username"
      />
      {errors.username && <p>username is not valide</p>}

      <input
        className="border p-2 m-5"
        type="text"
        {...register("type", {
          minLength: 2,
          required: { value: true, message: "This is required" },
        })}
        placeholder="Please enter type of ticket"
      />
      {errors.type && <p>Type is not valide min 2 caracteres</p>}
      {spaces.map((space) => (
        <label key={space.id}>
          <input
            type="checkbox"
            value={space.name}
            {...register("allowedSpaces")}
          />
          {space.name}
        </label>
      ))}
      {errors.allowedSpaces && <p>At least one space must be selected</p>}

      <input type="submit" />
    </form>
  );
}
