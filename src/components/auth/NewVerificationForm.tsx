"use client";
import React, { useCallback, useEffect, useState } from "react";
import CartWrapper from "./CartWrapper";
import { useSearchParams } from "next/navigation";
import { BeatLoader } from "react-spinners";
import { newVerification } from "@/actions/new-verification";
import { FormSuccess } from "../FormSuccsess";
import { FormError } from "../FormError";

const NewVerificationForm = () => {
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (!token) {
      setError("Missing token!");
      return;
    }

    newVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError("Something went wrong!");
      });
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);
  return (
    <CartWrapper
      headerLabel="Confirming your verification"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
    >
      <div className="flex items-center w-full justify-center">
        {!success && !error && <BeatLoader />}
        <FormSuccess message={success} />
        {!success && error && <FormError message={error} />}
      </div>
    </CartWrapper>
  );
};

export default NewVerificationForm;
