import { useForm, SubmitHandler } from "react-hook-form";
import authServices from "@/services/authService";
import toast from "react-hot-toast";
import { RegisterForm } from "@/interfaces/user";
import { useRouter } from "next/router";

export default function Register() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    defaultValues: {
      username: "",
      role: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit: SubmitHandler<RegisterForm> = (formData) => {
    authServices
      .register(formData)
      .then((response) => {
        console.log("🚀 ~ file: index.tsx:27 ~ .then ~ response:", response)
        if (response.status === 201) {
          router.push("/login");
          toast.success("User was registered !", { duration: 3000 });
          console.log("🚀 ~ file: index.tsx:30 ~ user register")
          
        }
      })
      .catch((err) => {
        console.log("🚀 ~ file: index.tsx:36 ~ Register ~ err:", err)
        toast.error("Username already exist !", { duration: 3000 });
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

      <select className="border" {...register("role", { required: true })}>
        <option value="">Select role...</option>
        <option value="admin">Admin</option>
        <option value="employee">Employee</option>
        <option value="veterinarian">Veterinarian</option>
        <option value="entretienAgent">Entretien Agent</option>
        <option value="seller">Seller</option>
        <option value="visitor">Visitor</option>
      </select>
      {errors.role && <p>Role is required</p>}

      <input
        className="border p-2 m-5"
        type="password"
        {...register("password", {
          minLength: 2,
          required: { value: true, message: "This is required" },
        })}
        placeholder="Please enter password"
      />
      {errors.password && <p>Password is not valide min 2 caracteres</p>}
      <input
        className="border p-2 m-5"
        type="password"
        {...register("confirmPassword", {
          minLength: 2,
          required: { value: true, message: "This is required" },
        })}
        placeholder="Please confirm password"
      />
      {errors.confirmPassword && <p>Password is not valide min 2 caracteres</p>}

      <input type="submit" />
    </form>
  );
}