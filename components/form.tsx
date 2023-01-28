import React, { FormEvent, useState } from "react";
import {
  Textarea,
  Button,
  createStyles,
  Container,
  Title,
  TextInput,
} from "@mantine/core";
import { useFormspark } from "@formspark/use-formspark";

const FORMSPARK_FORM_ID = "MKQqQREq";

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 30,
    marginBottom: 40,
    textAlign: "center",
    color: theme.colors.brand[0],
  },
  wrap: {
    padding: "50px 10px",
  },
  control: {
    marginTop: theme.spacing.md,
    height: 42,
    fontSize: theme.fontSizes.md,
    backgroundColor: theme.colors.brand[0],

    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.md,
    },

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.md,
      marginLeft: 0,
      width: "100%",
    },
  },
  textarea: {
    label: {
      fontSize: 18,
      marginBottom: 10,
    },
    textarea: {
      minHeight: 200,
      outline: "none",
    },
  },
  email: {
    label: {
      fontSize: 18,
      marginBottom: 10,
    },
    input: {
      outline: "none",
      minHeight: 40,
    },

    marginBottom: 20,
  },
}));

export function ContactForm() {
  const { classes } = useStyles();
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await submit({ message, email });
    alert("Die Nachricht wurde erfolgreich gesendet");
  };

  return (
    <form onSubmit={onSubmit}>
      <Container className={classes.wrap}>
        <Title className={classes.title}>Kontaktiere uns</Title>
        <TextInput
          className={classes.email}
          required
          type="email"
          label="Deine E-Mail"
          placeholder="Geben Sie Ihre E-Mail-Adresse an"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Textarea
          className={classes.textarea}
          value={message}
          required
          placeholder="Schreibe deine Nachricht hier..."
          label="Ihre Nachricht"
          withAsterisk
          rows={20}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button className={classes.control} type="submit" disabled={submitting}>
          senden
        </Button>
      </Container>
    </form>
  );
}
