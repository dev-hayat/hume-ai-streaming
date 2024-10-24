import Link from "next/link";

export function Nav() {
  return (
    <div>
      <div className="flex w-full items-center justify-between px-10 py-5 md:w-auto md:rounded-full">
        <Link href="/" className="ms-2 md:me-24 flex">
          <p className="self-center whitespace-nowrap text-lg font-semibold dark:text-white sm:text-2xl">
            Voicing <span className="text-[#5674F7]">AI</span>
          </p>
        </Link>

        {/* <div className="hidden text-xs md:block lg:text-sm">
          <NavItem route="/" name="Home" />
          <NavItem route="/face" name="Facial Expression" />
          <NavItem route="/burst" name="Vocal Burst" />
          <NavItem route="/prosody" name="Speech Prosody" />
          <NavItem route="/language" name="Written Language" />
        </div> */}
      </div>

      <div className="w-full border-b-2 border-neutral-200"></div>
    </div>
  );
}

type NavItemProps = {
  route: string;
  name: string;
};

function NavItem({ route, name }: NavItemProps) {
  return (
    <Link href={route} className="mr-2 rounded-full py-2 px-3 duration-200 hover:bg-neutral-200 hover:ease-linear">
      <div className="block font-medium text-neutral-800 md:inline-block">{name}</div>
    </Link>
  );
}
