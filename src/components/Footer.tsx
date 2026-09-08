import { Flex, Grid, Typography } from "antd";
import "./style.css";

const { Text, Link } = Typography;
const { useBreakpoint } = Grid;

const Footer = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  return (
    <Flex
      component="footer"
      vertical={isMobile}
      justify="space-between"
      gap={isMobile ? 40 : 0}
      style={{
        padding: isMobile ? "40px 24px" : "80px 10%",
      }}
    >
      {/* INFO */}
      <Flex vertical gap={50}>
        <Flex vertical gap={24}>
          <Text type="secondary">INFO</Text>

          <Flex vertical>
            <Link>PRICING /</Link>
            <Link>ABOUT /</Link>
            <Link>CONTACTS</Link>
          </Flex>
        </Flex>

        <Flex vertical gap={24}>
          <Text type="secondary">LANGUAGES</Text>

          <Flex vertical>
            <Link>ENG /</Link>
            <Link>ESP /</Link>
            <Link>SVE</Link>
          </Flex>
        </Flex>
      </Flex>

      {/* TECHNOLOGIES */}
      <Flex vertical gap={24}>
        <Text type="secondary">TECHNOLOGIES</Text>

        <Flex
          align="center"
          gap={32}
          vertical={isMobile}
        >
          <div className="footer-logo">
            XIV
            <br />
            QR
          </div>

          <Text type="secondary">
            Near-field communication /
          </Text>
        </Flex>
      </Flex>

      {/* BOTTOM */}
      <Flex
        vertical
        justify="flex-end"
        gap={8}
      >
        <Text type="secondary">
          © 2024 — copyright
        </Text>

        <Link type="secondary">
          privacy
        </Link>
      </Flex>
    </Flex>
  );
};

export default Footer;