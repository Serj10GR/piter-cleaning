import { createStyles, Header, Group, Container, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconBrandGmail, IconPhone } from "@tabler/icons";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const useStyles = createStyles((theme) => ({
  mobile: {
    position: "absolute",
    right: 0,
    top: 56,
    left: 0,
    bottom: 0,
    background: "white",
    zIndex: 10,
    padding: 0,
  },
  mobileContactWrapper: {
    justifyContent: "center",
    marginTop: theme.spacing.xl,
  },
  mobileLinks: {
    flexDirection: "column",
    paddingTop: theme.spacing.xl,
    gap: 0,
  },
  outer: {
    background: theme.colors.brand[0],
    borderBottom: 0,
  },
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 56,

    [theme.fn.smallerThan("sm")]: {
      justifyContent: "flex-start",
    },
  },

  links: {
    width: 260,

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  contactLinks: {
    gap: 0,
    textAlign: "center",
    fontSize: theme.fontSizes.sm,
    flexDirection: "column",

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  constactLink: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    paddingLeft: 5,
  },
  contactLinkWrapper: {
    display: "flex",
    alignItems: "center",
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },

    [theme.fn.smallerThan("sm")]: {
      borderTop: `1px solid ${theme.colors.brand[0]}`,
      display: "inline-block",
      width: "100%",
      textAlign: "center",
      padding: theme.spacing.md,
      borderRadius: 0,
      textTransform: "uppercase",

      "&:hover": {
        backgroundColor: theme.colors.brand[0],
      },

      "&:last-of-type": {
        borderBottom: `1px solid ${theme.colors.brand[0]}`,
      },
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

interface HeaderMiddleProps {
  links: { link: string; label: string }[];
}

export function MainHeader({ links }: HeaderMiddleProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes, cx } = useStyles();

  const router = useRouter();

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: router.pathname === link.link,
      })}
    >
      {link.label}
    </Link>
  ));

  return (
    <Header className={classes.outer} height={56}>
      {opened && (
        <Container className={classes.mobile}>
          <Group className={classes.mobileLinks}>{items}</Group>
          <Group className={classes.mobileContactWrapper}>
            <div className={classes.contactLinkWrapper}>
              <IconBrandGmail size={15} />
              <a
                className={classes.constactLink}
                href="mailto:service@hausbesorger.net"
              >
                service@hausbesorger.net
              </a>
            </div>
            <div className={classes.contactLinkWrapper}>
              <IconPhone size={15} />
              <a className={classes.constactLink} href="tel:+4367762853634">
                +43(0) 6776 285 3634
              </a>
            </div>
          </Group>
        </Container>
      )}
      <Container className={classes.inner}>
        <Burger
          area-label="menu"
          opened={opened}
          onClick={toggle}
          size="sm"
          className={classes.burger}
        />
        <Link href="/">
          <Image
            alt="zmeu hasbesorger logo"
            src="/images/logo.png"
            width={200}
            height={100}
          />
        </Link>
        <Group className={classes.contactLinks}>
          <div className={classes.contactLinkWrapper}>
            <IconBrandGmail size={15} />
            <a
              className={classes.constactLink}
              href="mailto:service@hausbesorger.net"
            >
              service@hausbesorger.net
            </a>
          </div>
          <div className={classes.contactLinkWrapper}>
            <IconPhone size={15} />
            <a className={classes.constactLink} href="tel:+4367762853634">
              +43(0) 6776 285 3634
            </a>
          </div>
        </Group>
        <Group className={classes.links} spacing={5}>
          {items}
        </Group>
      </Container>
    </Header>
  );
}
