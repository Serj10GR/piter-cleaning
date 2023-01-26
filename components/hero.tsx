import { Title, Text, Container, Button, Overlay, createStyles, Anchor } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: 180,
    paddingBottom: 130,
    backgroundImage:
      'url("/images/hero.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    '@media (max-width: 520px)': {
      paddingTop: 80,
      paddingBottom: 50,
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
    padding: '0 10px',
  },

  title: {
    fontWeight: 800,
    fontSize: 60,
    letterSpacing: -1,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.white,
    marginBottom: theme.spacing.xs,
    textAlign: 'center',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    '@media (max-width: 520px)': {
      fontSize: 28,
      textAlign: 'left',
    },
  },

  highlight: {
    color: theme.colors.brand[0],
  },

  description: {
    color: theme.colors.gray[0],
    textAlign: 'center',

    '@media (max-width: 520px)': {
      fontSize: theme.fontSizes.md,
      textAlign: 'left',
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 1.5,
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    '@media (max-width: 520px)': {
      flexDirection: 'column',
    },
  },

  control: {
    height: 42,
    fontSize: theme.fontSizes.md,
    backgroundColor: theme.colors.brand[0],

    '&:not(:first-of-type)': {
      marginLeft: theme.spacing.md,
    },

    '@media (max-width: 520px)': {
      '&:not(:first-of-type)': {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },

  secondaryControl: {
    color: theme.white,
    backgroundColor: 'rgba(255, 255, 255, .4)',

    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, .45) !important',
    },
  },
}));

export function HeroComponent() {
  const { classes, cx } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Zmeu{' '}
          <Text component="span" inherit className={classes.highlight}>
            hausbesorger
          </Text>
        </Title>

        <Container>
          <Text size="lg" className={classes.description}>
           Wie sind ein neuses Unternehmen auf dem Arbeitsmarkt in Ostereich, jetzt suchen wir Kunden und bieten ihnen gerne unsere Dienstleistungen an, die ein breits Spektrum umfassen. Wir setzen uns gerne min ihen in Verbindung, um das Leben zu elnem vorteilhaften Preis komfortabler und sauberer zu gastalten.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control}>
            Suna acum 
          </Button>
          <Button className={cx(classes.control, classes.secondaryControl)} size="lg">
            Scriene
          </Button>
        </div>
      </div>
    </div>
  );
}