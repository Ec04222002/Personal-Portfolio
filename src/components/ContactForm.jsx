import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { workEmail, colors } from "../constants";
import toast from "react-hot-toast";
const ContactForm = () => {
  const formIn = useRef();
  const firstNameIn = useRef("");
  const lastNameIn = useRef("");
  const emailIn = useRef("");
  const messageIn = useRef("");
  const toasterStyle = {
    style: {
      padding: "3px",
      backgroundColor: colors["brightText"],
    },
  };
  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_fe89xha",
        "template_6d0fkzm",
        formIn.current,
        "8QShdlgv6flunmXw0"
      )
      .then(
        (result) => {
          toast.success("Email sent!", toasterStyle);
          // show the user a success message
        },
        (error) => {
          // show the user an error
          toast.error(
            `Cannot send email - Please try emailing directly to ${workEmail} by clicking on the mail icon`,
            toasterStyle
          );
        }
      );
  };
  const isValidEmail = (email) => {
    const filter =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return filter.test(email);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let firstName = firstNameIn.current.value;
    let lastName = lastNameIn.current.value;
    let email = emailIn.current.value;
    let message = messageIn.current.value;
    if (!isValidEmail(email) || email.trim() === "") {
      toast.error("Invalid email", toasterStyle);
      return;
    }
    const messageWord = message.trim().match(/\S+\s*/g);
    if (!messageWord || messageWord.length < 3) {
      toast.error("Invalid message - Please enter > 2 words", toasterStyle);
      return;
    }

    if (firstName.trim() == "") firstName = "Anonymous_First";
    if (lastName.trim() == "") lastName = "Anonymous_Last";

    //sending
    sendEmail();
  };
  return (
    <div className="xl:w-[590px] 2xl:w-[650px]  overflow-hidden">
      <form
        ref={formIn}
        className="grid grid-cols-2 grid-rows-5 gap-7 text-left"
      >
        <input
          ref={firstNameIn}
          className="col-span-1"
          type="text"
          placeholder="First Name"
          name="first_name"
        />
        <input
          ref={lastNameIn}
          className="col-span-1 "
          type="text"
          placeholder="Last Name"
          name="last_name"
        />
        <input
          ref={emailIn}
          className="col-span-2"
          type="email"
          placeholder="Email"
          name="reply_to"
        />
        <textarea
          ref={messageIn}
          className="row-span-2 col-span-2 py-3"
          placeholder="Write your message"
          name="message"
        />
        <input
          className="btn btn-primary col-span-2 min-w-full"
          type="submit"
          onClick={handleSubmit}
          value="Send"
        />
      </form>
    </div>
  );
};

export default ContactForm;
