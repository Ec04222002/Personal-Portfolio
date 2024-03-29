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
      padding: "4px",
      backgroundColor: colors["text"],
    },
  };

  const emailLimit = 8;

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

    let firstName = firstNameIn.current.value.trim();
    let lastName = lastNameIn.current.value.trim();
    let email = emailIn.current.value.trim();
    let message = messageIn.current.value.trim();
    if (!isValidEmail(email) || email === "") {
      toast.error("Invalid email", toasterStyle);
      return;
    }
    const messageWord = message.trim().match(/\S+\s*/g);
    if (!messageWord || messageWord.length < 3) {
      toast.error("Invalid message - Please enter > 2 words", toasterStyle);
      return;
    }

    const emailCount = JSON.parse(localStorage.getItem("email_count")) || 0;
    const emailMessages = JSON.parse(localStorage.getItem(email)) || [];
    if (parseInt(emailCount) > emailLimit) {
      toast.error(
        `Cannot send email - You have reached the limit for this form. Try emailing directly to ${workEmail} by clicking on the mail icon`,
        { ...toasterStyle, duration: 6000 }
      );
      return;
    }
    if (emailMessages.includes(message)) {
      toast.error(
        "Cannot send email - You've already sent this message. Will respond shortly.",
        { ...toasterStyle, duration: 5000 }
      );
      return;
    }
    localStorage.setItem("email_count", JSON.stringify(emailCount + 1));
    localStorage.setItem(email, JSON.stringify([...emailMessages, message]));

    if (firstName === "") firstName = "Anonymous_First";
    if (lastName === "") lastName = "Anonymous_Last";

    //sending
    sendEmail();
  };
  return (
    <div className="overflow-hidden ">
      <form
        ref={formIn}
        className="grid grid-cols-2 grid-rows-5 text-left gap-7"
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
          className="col-span-2 row-span-2 py-3"
          placeholder="Write your message"
          name="message"
        />
        <input
          className="min-w-full col-span-2 btn btn-primary"
          type="submit"
          onClick={handleSubmit}
          value="Send"
        />
      </form>
    </div>
  );
};

export default ContactForm;
