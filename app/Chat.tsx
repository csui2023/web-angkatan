export interface ChatProps {
  children: string,
  name: string,
  position: 'left' | 'right',
}

export default function Chat(props: ChatProps) {
  return (
    <div>
      <div className={`${props.position === "left" ? "text-left mr-auto" : "text-right ml-auto"} max-w-3xl p-5 bg-white bg-opacity-30 backdrop-blur border-white border-2 border-solid border-opacity-30 rounded-xl`}>
        <p className="pb-2 border-b-2 border-white border-opacity-30">{props.children}</p>
        <p className="pt-2">{props.name}</p>
      </div>
    </div>
  );
}
