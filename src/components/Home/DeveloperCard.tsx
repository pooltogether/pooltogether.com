import { Button, ButtonProps, LINKS } from "@shared/ui";
import classNames from "classnames";
import { useTranslations } from "next-intl";
import Image from "next/image";

type DeveloperCardType = "v4Docs" | "docs" | "addToken";

interface DeveloperCardProps {
  type: DeveloperCardType;
  className?: string;
}

export const DeveloperCard = (props: DeveloperCardProps) => {
  const { type, className } = props;

  const t = useTranslations("Home");
  const t_common = useTranslations("Common");

  const developerCardInfo: Record<
    DeveloperCardType,
    { src: `/${string}.svg`; buttonProps: ButtonProps; tag?: string }
  > = {
    v4Docs: {
      src: "/graphics/IntegrateGraphic.svg",
      buttonProps: {
        href: LINKS.devDocs,
        target: "_blank",
        children: t("docs", { version: 4 }),
      },
    },
    docs: {
      src: "/graphics/YieldGraphic.svg",
      buttonProps: {
        href: LINKS.devDocs_v5,
        target: "_blank",
        children: t("docs", { version: 5 }),
      },
      tag: t_common("alpha"),
    },
    // TODO: add href when not disabled
    addToken: {
      src: "/graphics/AddTokenGraphic.svg",
      buttonProps: {
        href: "#",
        target: "_blank",
        color: "transparent",
        children: t("addYourToken"),
        disabled: true,
      },
      tag: t_common("comingSoon"),
    },
  };

  const card = developerCardInfo[type];
  const { children: buttonChildren, ...restButtonProps } = card.buttonProps;

  return (
    <div
      className={classNames(
        "relative w-full h-full flex flex-col items-center gap-6 bg-pt-bg-purple-darker rounded-3xl",
        "p-6 md:p-3 xl:p-6",
        className
      )}
    >
      {"tag" in card && (
        <span className="absolute top-0 -translate-y-1/2 px-3 py-0.5 text-xs text-pt-purple-400 bg-[#361D60] rounded-full">
          {card.tag}
        </span>
      )}
      <Image
        src="/icons/codeIcon.svg"
        width={333}
        height={259}
        alt="Code"
        className="absolute top-4 left-4 w-5 h-auto text-pt-purple-400 4xl:w-6"
      />
      <Image
        src={card.src}
        width={100}
        height={80}
        alt={type}
        className="w-3/4 grow mt-2"
      />
      <Button
        fullSized={true}
        {...restButtonProps}
        pill={true}
        className="overflow-hidden"
      >
        <span className="text-sm whitespace-nowrap md:text-xs xl:text-sm">
          {buttonChildren}
        </span>
      </Button>
    </div>
  );
};
