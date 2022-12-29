
type TitleRightProps = {
    title: string,
    Textcolor: string
    bordercolor: string
}

function TitleRight({ title, Textcolor, bordercolor }: TitleRightProps) {

    return (
        <div className="my-10 flex flex-col">
            <h4 className={`text-xl ${Textcolor} font-bold `}>{title}</h4>
            <span className={`h-[2px] rounded w-full mt-1 ${bordercolor} `}></span>
        </div>
    )

}

export default TitleRight