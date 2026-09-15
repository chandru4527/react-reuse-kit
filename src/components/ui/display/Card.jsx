import Button from "../buttons/Button";
import { twMerge } from "tailwind-merge";

const Card = ({
  image,
  imageAlt = "Card image",
  imagePosition = "top",
  imageClassName = "",

  icon,
  iconClassName = "",

  badge,
  badgeClassName = "",

  title,
  titleClassName = "",

  description,
  descriptionClassName = "",

  value,
  valueClassName = "",

  header,
  footer,

  actions = [],
  children,

  variant = "default",

  loading = false,
  clickable = false,
  onClick,

  darkMode = false,
  width = "full",

  className = "",
  bodyClassName = "",
  headerClassName = "",
  footerClassName = "",

  ...props
}) => {
  const widths = {
    auto: "w-auto",
    xs: "w-48",
    sm: "w-64",
    md: "w-80",
    lg: "w-96",
    xl: "w-[32rem]",
    full: "w-full",
  };

  const theme = darkMode
    ? {
      card: "border-gray-700 bg-gray-900 text-white",
      border: "border-gray-700",
      title: "text-white",
      description: "text-gray-400",
      value: "text-white",
      skeleton: "bg-gray-700",
    }
    : {
      card: "border-gray-200 bg-white text-gray-900",
      border: "border-gray-200",
      title: "text-gray-900",
      description: "text-gray-500",
      value: "text-gray-900",
      skeleton: "bg-gray-200",
    };

  const imageSection = image ? (
    <img
      src={image}
      alt={imageAlt}
      className={twMerge("h-auto w-full object-cover", imageClassName)}
    />
  ) : null;

  const actionButtons = actions.length > 0 && (
    <div className="flex flex-wrap items-center gap-2">
      {actions.map((action, index) => (
        <Button
          key={action.id || index}
          leftIcon={action.icon}
          rightIcon={action.rightIcon}
          iconSize={action.iconSize}
          iconClassName={action.iconClassName}
          variant={action.variant}
          size={action.size}
          loading={action.loading}
          type={action.type || "button"}
          disabled={action.disabled}
          className={action.className}
          onClick={(event) => {
            event.stopPropagation();
            action.onClick?.(event);
          }}
        >
          {action.label}
        </Button>
      ))}
    </div>
  );

  const hasBodyContent =
    icon ||
    badge ||
    title ||
    description ||
    value !== undefined ||
    children ||
    actionButtons;

  const renderStatCard = () => (
    <div className="flex items-center justify-between">
      <div>
        {title && (
          <p
            className={twMerge(
              "text-[17px] font-medium leading-6 text-slate-700",
              titleClassName
            )}
          >
            {title}
          </p>
        )}

        {value !== undefined && (
          <h2
            className={twMerge(
              "mt-3 text-4xl font-bold leading-none text-slate-900",
              valueClassName
            )}
          >
            {value}
          </h2>
        )}
      </div>

      {icon && (
        <div
          className={twMerge(
            "flex h-17.5 w-17.5 shrink-0 items-center justify-center rounded-2xl text-[30px]",
            iconClassName
          )}
        >
          {icon}
        </div>
      )}
    </div>
  );

  const renderDefaultCard = () => (
    <>
      {(icon || badge) && (
        <div className="mb-3 flex items-center justify-between gap-3">
          {icon && (
            <div
              className={twMerge(
                "flex h-10 w-10 items-center justify-center rounded-lg",
                iconClassName
              )}
            >
              {icon}
            </div>
          )}

          {badge && (
            <span
              className={twMerge(
                "rounded-full px-3 py-1 text-xs font-medium",
                badgeClassName
              )}
            >
              {badge}
            </span>
          )}
        </div>
      )}

      {title && (
        <h3
          className={twMerge(
            "text-lg font-semibold",
            theme.title,
            titleClassName
          )}
        >
          {title}
        </h3>
      )}

      {value !== undefined && (
        <h2
          className={twMerge(
            "mt-2 text-3xl font-bold",
            theme.value,
            valueClassName
          )}
        >
          {value}
        </h2>
      )}

      {description && (
        <p
          className={twMerge(
            "mt-2 text-sm",
            theme.description,
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}

      {children && <div className="mt-4">{children}</div>}

      {actionButtons && <div className="mt-4">{actionButtons}</div>}
    </>
  );

  return (
    <div
      onClick={onClick}
      className={twMerge(
        "overflow-hidden rounded-xl border shadow-sm transition",
        theme.card,
        widths[width] || widths.full,
        (clickable || onClick) && "cursor-pointer hover:shadow-md",
        variant === "stat" ,
        className
      )}
      {...props}
    >
      {loading ? (
        <div className="animate-pulse p-6">
          <div
            className={twMerge(
              "mb-4 h-14 w-full rounded-lg",
              theme.skeleton
            )}
          />

          <div
            className={twMerge(
              "mb-3 h-5 w-3/4 rounded",
              theme.skeleton
            )}
          />

          <div
            className={twMerge(
              "h-4 w-2/3 rounded",
              theme.skeleton
            )}
          />
        </div>
      ) : (
        <>
          {header && (
            <div
              className={twMerge(
                "border-b p-4",
                theme.border,
                headerClassName
              )}
            >
              {header}
            </div>
          )}

          {imagePosition === "top" && imageSection}

          {hasBodyContent && (
            <div
              className={twMerge(
                variant === "stat" ? "px-4 py-6" : "p-4",
                bodyClassName
              )}
            >
              {variant === "stat" ? renderStatCard() : renderDefaultCard()}
            </div>
          )}

          {imagePosition === "bottom" && imageSection}

          {footer && (
            <div
              className={twMerge(
                "border-t p-4",
                theme.border,
                footerClassName
              )}
            >
              {footer}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Card;