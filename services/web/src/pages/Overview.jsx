export default function Overview() {
  return (
    <>
      <div className="page-header">
        <div className="page-title">
          <h1>Обзор использования ПО</h1>
          <p>Лицензии, фактические установки и нарушения в одном месте.</p>
        </div>
        <button className="btn btn-outline">Выгрузить отчет</button>
      </div>

      {/* Карточки статистики */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-title">Установки</div>
          <div className="stat-value">190</div>
          <div className="stat-desc">на компьютерах сотрудников</div>
        </div>
        <div className="stat-card">
          <div className="stat-title">Платные лицензии</div>
          <div className="stat-value">115</div>
          <div className="stat-desc">117 фактических установок</div>
        </div>
        <div className="stat-card">
          <div className="stat-title">Установки с риском</div>
          <div className="stat-value">18</div>
          <div className="stat-desc">5 — дефицит лицензий</div>
        </div>
        <div className="stat-card">
          <div className="stat-title">Свободные лицензии</div>
          <div className="stat-value">3</div>
          <div className="stat-desc">можно перераспределить</div>
        </div>
      </div>

      {/* Таблица 1 */}
      <div className="table-container">
        <div className="table-header-title">
          Сопоставление лицензий и установок
          <a href="#" style={{ fontSize: '13px', color: 'var(--primary)', textDecoration: 'none' }}>Все лицензии →</a>
        </div>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Программное обеспечение</th>
                <th>Куплено</th>
                <th>Установлено</th>
                <th>Свободно</th>
                <th>Дефицит</th>
                <th>Состояние</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Microsoft Office LTSC 2021</td>
                <td>80</td>
                <td>84</td>
                <td className="text-danger">0</td>
                <td className="text-danger">4</td>
                <td><span className="badge badge-warning">Дефицит лицензий</span></td>
              </tr>
              <tr>
                <td>Microsoft Visio 2021</td>
                <td>25</td>
                <td>22</td>
                <td>3</td>
                <td>0</td>
                <td>Есть свободные</td>
              </tr>
              <tr>
                <td>AutoCAD 2024</td>
                <td>10</td>
                <td>11</td>
                <td className="text-danger">0</td>
                <td className="text-danger">1</td>
                <td><span className="badge badge-warning">Дефицит лицензий</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Таблица 2 */}
      <div className="table-container">
        <div className="table-header-title">
          Требует внимания
        </div>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Риск</th>
                <th>ПО / причина</th>
                <th>Установки</th>
                <th>Рекомендуемое действие</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span className="badge badge-danger">Юридический</span></td>
                <td>WinRAR — условий коммерческого использования</td>
                <td>4</td>
                <td>Проверить соглашение</td>
              </tr>
              <tr>
                <td><span className="badge badge-danger">Недопустимое ПО</span></td>
                <td>AnyDesk — запрещён к использованию</td>
                <td>6</td>
                <td>Удалить с компьютеров</td>
              </tr>
              <tr>
                <td><span className="badge badge-danger">Риск ИБ</span></td>
                <td>uTorrent — запрещён к использованию</td>
                <td>3</td>
                <td>Удалить с компьютеров</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}