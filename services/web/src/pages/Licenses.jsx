export default function Licenses() {
  return (
    <>
      <div className="page-header">
        <div className="page-title">
          <h1>Лицензии</h1>
          <p>Реестр приобретённых лицензий и контроль доступного остатка.</p>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button className="btn btn-outline">Импортировать</button>
          <button className="btn btn-primary">Добавить лицензию</button>
        </div>
      </div>

      <div className="toolbar">
        <input type="text" className="input-field" placeholder="Поиск по ПО или номеру договора" />
        <select className="select-field"><option>Состояние: все</option></select>
      </div>

      <div className="table-container">
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>ПО / договор</th>
                <th>Модуль лицензии</th>
                <th>Куплено</th>
                <th>Зарезерв.</th>
                <th>Свободно</th>
                <th>Дефицит</th>
                <th>Срок действия</th>
                <th>Соглашение</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><b>Microsoft Office LTSC 2021</b><br/><span style={{fontSize: '12px', color: 'var(--text-muted)'}}>Договор № 01/2026</span></td>
                <td>На устройство</td>
                <td>80</td>
                <td>84</td>
                <td className="text-danger">0</td>
                <td className="text-danger">4</td>
                <td>Бессрочно</td>
                <td>EULA</td>
              </tr>
              <tr>
                <td><b>Microsoft Visio 2021</b><br/><span style={{fontSize: '12px', color: 'var(--text-muted)'}}>Договор № 02/2026</span></td>
                <td>На устройство</td>
                <td>25</td>
                <td>22</td>
                <td>3</td>
                <td>0</td>
                <td>Бессрочно</td>
                <td>EULA</td>
              </tr>
              <tr>
                <td><b>AutoCAD 2024</b><br/><span style={{fontSize: '12px', color: 'var(--text-muted)'}}>Договор № 03/2026</span></td>
                <td>На пользователя</td>
                <td>10</td>
                <td>11</td>
                <td className="text-danger">0</td>
                <td className="text-danger">1</td>
                <td>До 31.12.2026</td>
                <td>Условия подписки</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="pagination">
          <span>Итого: 115 куплено · 117 установлено · 3 свободно · дефицит 5</span>
        </div>
      </div>
    </>
  );
}