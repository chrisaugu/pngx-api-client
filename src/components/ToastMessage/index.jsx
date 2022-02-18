import React from "react";
import { Button, useToasts } from "@geist-ui/react";

export default function ToastExample() {
  const [toast, setToast] = useToasts();

  // const click = () => {
  //   setToast({ text: "Lorem ipsum", type: "success" });
  // };

  // const action = {
  //   name: 'alert',
  //   handler: () => alert('alert from toast')
  // }
  const action = {
    name: 'cancel',
    passive: true,
    handler: (event, cancel) => cancel()
  }
  const click = () => setToast({
    text: 'HTTP is stateless, but not sessionless.',
    actions: [action],
  })

  return <Button scale={2/3} auto onClick={click} type="secondary">Show Action</Button>
  // return (<Button onClick={() => click()}> Display</Button>);
}