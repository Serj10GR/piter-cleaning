import {
  Title,
  Text,
  Container,
  Button,
  Overlay,
  createStyles,
} from "@mantine/core";
import { useRouter } from "next/router";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingTop: 180,
    paddingBottom: 130,
    backgroundImage: 'url("/images/hero.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",

    "@media (max-width: 520px)": {
      paddingTop: 80,
      paddingBottom: 50,
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
    padding: "0 10px",
  },

  title: {
    fontWeight: 800,
    fontSize: 60,
    letterSpacing: -1,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.white,
    marginBottom: theme.spacing.xs,
    textAlign: "center",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    "@media (max-width: 520px)": {
      fontSize: 28,
      textAlign: "left",
    },
  },

  highlight: {
    color: theme.colors.brand[0],
  },

  description: {
    color: theme.colors.gray[0],
    textAlign: "center",

    "@media (max-width: 520px)": {
      fontSize: theme.fontSizes.md,
      textAlign: "left",
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 1.5,
    display: "flex",
    justifyContent: "center",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    "@media (max-width: 520px)": {
      flexDirection: "column",
    },
  },

  control: {
    height: 42,
    fontSize: theme.fontSizes.md,
    backgroundColor: theme.colors.brand[0],

    "&:hover": {
      backgroundColor: `${theme.colors.brand[1]} !important`,
    },
  },
}));

export function HeroComponent() {
  const { classes } = useStyles();
  const router = useRouter();

  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Zmeu{" "}
          <Text component="span" inherit className={classes.highlight}>
            hausbesorger
          </Text>
        </Title>

        <Container>
          <Text size="lg" className={classes.description}>
            Wir sind ein neues Unternehmen auf dem Arbeitsmarkt in Österreich,
            jetzt suchen wir Kunden und bieten ihnen gerne unsere
            Dienstleistungen an, die ein breites Spektrum umfassen. Wir setzen
            uns gerne mit ihnen in Verbindung, um das Leben zu einem
            vorteilhaften Preis komfortabler und sauberer zu gestalten.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button
            onClick={() => router.push("/kontakt")}
            className={classes.control}
          >
            Schreiben
          </Button>
        </div>
      </div>
    </div>
  );
}
