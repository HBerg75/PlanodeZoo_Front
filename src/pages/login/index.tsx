import { useForm, SubmitHandler } from "react-hook-form";
import authServices from "@/services/authService";
import toast from "react-hot-toast";
import { LoginForm } from "@/interfaces/user";
import { useRouter } from "next/router";
import { useUser } from "@/utils/UserContext";

export default function Login() {
  const router = useRouter();
  const { setUser } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginForm>();

  const onSubmit: SubmitHandler<LoginForm> = async (dataForm) => {
    authServices
      .login(dataForm)
      .then((response) => {
        if (response.status === 200) {
          toast.success("User was logged in !", { duration: 3000 });
          const user = authServices.getCurrentUser();
          setUser(user);
          router.push("/");
        }
      })
      .catch((err) => {
        console.log(
          "🚀 ~ file: index.tsx:27 ~ constonSubmit:SubmitHandler<LoginForm>= ~ err:",
          err
        );
        toast.error("Username or Password not found !", { duration: 3000 });
      });
    reset();
  };

  return (
    <>
      <h1 className="text-center">LOGIN</h1>

      <form
        className="flex flex-col border p-5 m-5 items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="Username">Username</label>
        <input
          className="border p-2 m-5"
          id="username"
          {...register("username", {
            required: "required",
          })}
        />
        {errors.username && <span role="alert">{errors.username.message}</span>}
        <label htmlFor="password">password</label>
        <input
          className="border p-2 m-5"
          id="password"
          {...register("password", {
            required: "required",
            minLength: {
              value: 2,
              message: "min length is 2",
            },
          })}
          type="password"
        />
        {errors.password && <span role="alert">{errors.password.message}</span>}
        <button type="submit">Connexion</button>
      </form>
    </>
  );
}
