import { useForm } from "react-hook-form";
import { Button } from "./Button";
import { FormInput } from "./FormInput";
import { FingerprintIcon } from "./assets/FingerprintIcon";
import { Link } from "react-router-dom";

type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

function onSubmit(formData: FormData) {
  console.log(formData);
}

export function SignUpForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  return (
    <div className="text-on-background p-4">
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <FormInput
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
        <div className="mb-4">
          <FormInput
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
        <div className="mb-4">
          <FormInput
            label="Confirm Password"
            id="confirmPassword"
            error={errors.confirmPassword}
            type="password"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
          />
        </div>
        <div className="mb-4 flex gap-4 justify-between">
          <Button type="submit" className="shrink-0" Icon={FingerprintIcon}>
            Sign up
          </Button>
          <p className="text-on-background text-sm">
            Already have an account?{" "}
            <Link className="text-primary" to="/auth/signin">
              Sign in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
