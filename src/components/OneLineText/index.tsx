import cn from 'classnames'
import style from './style.module.css'
import { useTruncatedText } from "../../hooks/useTruncatedText";

type TProps = {
  children: string;
  tailLength: number;
  title?: string;
  className?: string;
  key?: string
}

const OneLineText = ({
  children,
  tailLength,
  title,
  className,
}: TProps) => {
    const {tail, truncated} = useTruncatedText(children, tailLength)

    return (
        <div title={title} className={cn(style.fixedWidthContainer, className)}>
            <div className={style.container} data-testid="one-line-component-container" >
                <div className={style.content}>{children}</div>
                <div className={style.truncated} data-testid="one-line-component-truncated">
                    {truncated}
                </div>
                <div className={style.tail} data-testid="one-line-component-tail">
                    {tail}
                </div>
            </div>
        </div>
    )
}

export { OneLineText };
