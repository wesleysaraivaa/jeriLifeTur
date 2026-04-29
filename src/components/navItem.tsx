export interface NavItemInterface {
  name: string;
  href: string;
}

export default function NavItens(props: NavItemInterface) {
  return (
    <li className="text-slate-700 transition-colors duration-300 hover:text-blue-500">
      <a className="font-regular inline-block py-1 px-3" href={props.href}>
        {props.name}
      </a>
    </li>
  );
}
