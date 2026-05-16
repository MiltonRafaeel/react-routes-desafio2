import './styles.css';

type Props = {
    title: String;
}

export default function TitleContent({ title } : Props) {

    return (
        <main>
            <section>
                <div className="ml160 mt20">
                    <h1>{title}</h1>
                </div>
            </section>
        </main>
    );
}