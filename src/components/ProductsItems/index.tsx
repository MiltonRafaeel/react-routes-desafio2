import './styles.css';

type Props = {
    item: String;
}

export default function ProductsItems({ item }: Props) {

    return (
        <main className="items-container">
            <div className="items-products-list">
                {item}
            </div>
        </main>
    );
}