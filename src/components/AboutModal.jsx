import {Component} from "react";
import {Modal, Tooltip, useModal} from "@geist-ui/core";
import {Button} from "./Buttons/Somebutton";
import RoundButton from "./Buttons/Round";
import {Info} from "@geist-ui/icons";


export default function AboutModal() {
    const { visible, setVisible, bindings } = useModal();

    return (
        <>
            <Tooltip text={"Info"} placement="bottom">
                <RoundButton
                    aria-label="Info"
                    icon={<Info />}
                    onClick={() => setVisible(true) }
                />
            </Tooltip>

            <Modal {...bindings} visible={visible}>
                <Modal.Title>About Nuku</Modal.Title>
                <Modal.Subtitle>This is a modal</Modal.Subtitle>
                <Modal.Content>
                    <p>Nuku is project by Christian Augustyn</p>
                </Modal.Content>
            </Modal>
        </>
    )
}