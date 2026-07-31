import { Fragment } from 'react';
import type { ReactNode } from 'react';
import { cx } from '../../utils/cx.js';

export interface Column<Row> {
  key: keyof Row & string;
  header: string;
  numeric?: boolean;
  index?: boolean;          // gold mono numeral column
  italic?: boolean;
}

export interface TableProps<Row extends Record<string, ReactNode>> {
  columns: Array<Column<Row>>;
  rows: Row[];
  activeRow?: number;
  total?: Partial<Record<keyof Row & string, ReactNode>> & { label?: string };
  className?: string;
}

export function Table<Row extends Record<string, ReactNode>>({ columns, rows, activeRow, total, className }: TableProps<Row>) {
  return (
    <table className={cx('losai-table', className)}>
      <thead>
        <tr>{columns.map(c => <th key={c.key} className={cx(c.numeric && 'losai-num')}>{c.header}</th>)}</tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className={cx(activeRow === i && 'is-active')}>
            {columns.map(c => (
              <td key={c.key} className={cx(c.numeric && 'losai-num', c.index && 'losai-idx')} style={c.italic ? { fontStyle: 'italic', color: 'var(--losai-label)' } : undefined}>
                {row[c.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      {total && (
        <tfoot>
          <tr>
            {columns.map((c, i) => (
              <td key={c.key} className={cx(c.numeric && 'losai-num')}>
                {i === 1 ? <span className="losai-label">{total.label ?? 'Total'}</span> : total[c.key] ?? null}
              </td>
            ))}
          </tr>
        </tfoot>
      )}
    </table>
  );
}

export interface SpecRowItem { label: string; value: ReactNode; italic?: boolean; }

/** 150px mono label column + Cormorant value column, on hairline rules. */
export const SpecRows = ({ items, className }: { items: SpecRowItem[]; className?: string }) => (
  <dl className={cx('losai-specs', className)}>
    {items.map(i => (
      <Fragment key={i.label}>
        <dt>{i.label}</dt>
        <dd style={i.italic ? { fontStyle: 'italic' } : undefined}>{i.value}</dd>
      </Fragment>
    ))}
  </dl>
);

export interface MetaCell { label: string; value: ReactNode; sub?: string; }

/** Equal columns divided by vertical hairlines, capped top and bottom. */
export const MetaRow = ({ cells, className }: { cells: MetaCell[]; className?: string }) => (
  <div className={cx('losai-meta-row', className)}>
    {cells.map(c => (
      <div key={c.label}>
        <div className="losai-label">{c.label}</div>
        <div className="losai-value" style={{ marginTop: 5 }}>{c.value}</div>
        {c.sub && <div className="losai-sub" style={{ marginTop: 1 }}>{c.sub}</div>}
      </div>
    ))}
  </div>
);
