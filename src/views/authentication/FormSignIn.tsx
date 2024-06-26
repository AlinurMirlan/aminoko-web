import { useForm } from "react-hook-form";
import { Button } from "../../components/common/Button";
import { InputForm } from "../../components/common/InputForm";
import { IconFingerprint } from "../../assets/IconFingerprint";
import { Link, useNavigate } from "react-router-dom";

type FormData = {
  email: string;
  password: string;
};

export function FormSignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const navigate = useNavigate();

  function onSubmit(formData: FormData) {
    console.log(formData);
    navigate("/home");
  }

  return (
    <div className="text-on-background p-4 w-full">
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-0.5">
          <div>
            <InputForm
              label="Email Address"
              id="email"
              error={errors.email}
              {...register("email", {
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format",
                },
                required: "Email is required",
              })}
            />
          </div>
          <div className="mb-1">
            <InputForm
              label="Password"
              id="password"
              error={errors.password}
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must have at least 8 characters",
                },
              })}
            />
          </div>
        </div>

        <div className="flex gap-4 justify-between">
          <Button type="submit" className="shrink-0" Icon={IconFingerprint}>
            Sign in
          </Button>
          <p className="text-on-background text-sm">
            Don&apos;t have an account?{" "}
            <Link className="text-primary" to="/auth/signup">
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
