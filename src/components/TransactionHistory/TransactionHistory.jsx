import s from "./TransactionHistory.module.css";
const TransactionHistory = ({ items }) => {
  return (
    <table className={s.table}>
      <thead className={s.thead}>
        <tr>
          <th className={s.th}>Type</th>
          <th className={s.th}>Amount</th>
          <th className={s.th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <tr className={s.tr} key={item.id}>
            <td className={s.td}>
              {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
            </td>
            <td className={s.td}>{item.amount}</td>
            <td className={s.td}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
