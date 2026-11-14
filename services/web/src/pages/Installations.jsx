export default function Installations() {
  return (
    <>
      <div className="page-header">
        <div className="page-title">
          <h1>Установки на компьютерах</h1>
          <p>HTML-файлы автоматически обнаруживаются и проверяются по кластеру.</p>
        </div>
        <button className="btn btn-outline">Проверить кластер</button>
      </div>

      <div className="toolbar">
        <input type="text" className="input-field" placeholder="Поиск по компьютеру, сотруднику или ПО" style={{ flex: 1, maxWidth: '400px' }} />
        <select className="select-field"><option>Риск: все</option><option>Дефицит лицензий</option><option>Запрещенное ПО</option></select>
        <select className="select-field"><option>Кластер: все</option></select>
      </div>

      <div className="table-container">
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Компьютер</th>
                <th>Сотрудник</th>
                <th>Программное обеспечение</th>
                <th>Исполняемый процесс</th>
                <th>Последний запуск</th>
                <th>Источник</th>
                <th>Результат проверки</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>WS-001</td>
                <td>Иванов А. С.</td>
                <td>Microsoft Office LTSC 2021</td>
                <td>WINWORD.EXE</td>
                <td>14.11.2026<br/><span style={{fontSize: '12px', color: 'var(--text-muted)'}}>09:12</span></td>
                <td>HTML-кластер</td>
                <td><span className="badge badge-danger">Дефицит лицензий</span></td>
              </tr>
              <tr>
                <td>WS-002</td>
                <td>Петрова Е. В.</td>
                <td>Google Chrome 130</td>
                <td>chrome.exe</td>
                <td>14.11.2026<br/><span style={{fontSize: '12px', color: 'var(--text-muted)'}}>09:28</span></td>
                <td>HTML-кластер</td>
                <td>Нарушений нет</td>
              </tr>
              <tr>
                <td>WS-003</td>
                <td>Соколов Д. А.</td>
                <td>WinRAR 5.90</td>
                <td>WinRAR.exe</td>
                <td>13.11.2026<br/><span style={{fontSize: '12px', color: 'var(--text-muted)'}}>16:40</span></td>
                <td>HTML-кластер</td>
                <td><span className="badge badge-warning">Проверить условия</span></td>
              </tr>
              <tr>
                <td>WS-004</td>
                <td>Смирнова О. И.</td>
                <td>AnyDesk 8.0</td>
                <td>AnyDesk.exe</td>
                <td>14.11.2026<br/><span style={{fontSize: '12px', color: 'var(--text-muted)'}}>08:55</span></td>
                <td>HTML-кластер</td>
                <td><span className="badge badge-danger">Запрещённое ПО</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="pagination">
          <span>Показаны 1–5 из 190</span>
          <div style={{ display: 'flex', gap: '4px', marginLeft: '16px' }}>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <span style={{ padding: '4px' }}>...</span>
            <button className="page-btn">38</button>
          </div>
        </div>
      </div>
    </>
  );
}