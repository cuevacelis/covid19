/** @jsxImportSource theme-ui */

export default function Footer() {
  return (
    <footer
      sx={{
        bg: "background",
      }}
      className="py-4 text-muted text-center text-small"
    >
      <hr
        sx={{
          borderBottomStyle: "solid",
          borderBottomColor: "borderNavbar",
          borderBottomWidth: "1px",
        }}
      />
      <p className="mb-1">Desarrollado con &hearts; en Javascript</p>
    </footer>
  );
}
