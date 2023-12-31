import "./Item.css";

export default function Item(props) {
  const { title, description } = props;

  return (
    <section>
      <div className="content">
        <h4>{title}</h4>
        <button>แสดง</button>
      </div>
      <div className="content">
        <h4>{description}</h4>
      </div>
    </section>
  );
}
