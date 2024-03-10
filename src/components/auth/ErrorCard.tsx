import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import CartWrapper from "./CartWrapper";

export const ErrorCard = () => {
  return (
    <CartWrapper
      headerLabel="Oops! Something went wrong!"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className="w-full flex justify-center items-center">
        <ExclamationTriangleIcon className="text-destructive" />
      </div>
    </CartWrapper>
  );
};
