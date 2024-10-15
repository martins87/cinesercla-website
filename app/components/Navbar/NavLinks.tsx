type Link = {
  src: string;
  label: string;
};

const links: Link[] = [
  { src: "/programacao", label: "PROGRAMAÇÃO" },
  { src: "/cinemas", label: "CINEMAS" },
  { src: "/promocoes", label: "PROMOÇÕES" },
  { src: "/corporativo", label: "CORPORATIVO" },
  { src: "/cinema", label: "BELO HORIZONTE/MG" },
];

const NavLinks = () => {
  return (
    <ul className="flex gap-6 font-bold">
      {links.map((link: Link) => (
        <li key={link.src}>{link.label}</li>
      ))}
    </ul>
  );
};

export default NavLinks;
