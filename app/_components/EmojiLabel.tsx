export default function EmojiLabel({ x, y, width, mood }) {
  const iconSize = 30;
  const iconY = y + 5; // small padding inside top of bar

  let href = "";

  switch (mood) {
    case -2:
      href = "/assets/images/icon-very-sad-white.svg";
      break;
    case -1:
      href = "/assets/images/icon-sad-white.svg";
      break;
    case 0:
      href = "/assets/images/icon-neutral-white.svg";
      break;
    case 1:
      href = "/assets/images/icon-happy-white.svg";
      break;
    case 2:
      href = "/assets/images/icon-very-happy-white.svg";
      break;
    default:
      href = "/assets/images/icon-neutral-white.svg";
  }

  return (
    <g>
      <image
        href={href}
        x={x + width / 2 - iconSize / 2}
        y={iconY}
        width={iconSize}
        height={iconSize}
      />
    </g>
  );
}
