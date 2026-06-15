import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";

// Interfaz estricta para nuestro formulario
interface LoginFormInputs {
  email: string;
  password?: string;
}

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const navigate = useNavigate();
  const { login } = useGlobalContext();

  // Tipado estricto de la función onSubmit
  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    console.log("Login exitoso (Simulado)", data);
    login();
    navigate("/");
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            {...register("email", {
              required: "El correo es obligatorio",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Formato de correo inválido",
              },
            })}
          />
          {errors.email && (
            <span className="error-text">{errors.email.message}</span>
          )}
        </div>

        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            {...register("password", {
              required: "La contraseña es obligatoria",
              minLength: {
                value: 6,
                message: "Debe tener al menos 6 caracteres",
              },
            })}
          />
          {errors.password && (
            <span className="error-text">{errors.password.message}</span>
          )}
        </div>

        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};
