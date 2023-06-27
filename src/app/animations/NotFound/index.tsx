"use client";
import NotFound from "./NotFound.json";
import { useLottie } from "lottie-react";
import { Container } from "@components/containers/Container";


export function NotFoundAnimation() {
  const options = {
    animationData: NotFound,
    autoplay: true,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <Container>
        {View}
    </Container>
  )
}
