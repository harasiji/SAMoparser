export default function Catalog() {
  return (
    <>
      <div className="page-header">
        <div className="page-title">
          <h1>Каталог программного обеспечения</h1>
          <p>Наименования, классификация и правила использования ПО.</p>
        </div>
        <button className="btn btn-primary">Добавить ПО</button>
      </div>

      <div className="toolbar">
        <input type="text" className="input-field" placeholder="Поиск по названию или производителю" />
        <select className="select-field"><option>Статус: все</option><option>Актуальный</option><option>Запрещенный</option></select>
        <select className="select-field"><option>Тип лицензии: все</option></select>
        <select className="select-field"><option>Класс ПО: все</option></select>
      </div>

      <div className="table-container">
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>ПО / версия / производитель</th>
                <th>Класс ПО</th>
                <th>Тип лицензии</th>
                <th>Соглашение / условие</th>
                <th>Статус</th>
                <th>Установки</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><b>Microsoft Office LTSC 2021</b><br/><span style={{fontSize: '12px', color: 'var(--text-muted)'}}>Microsoft</span></td>
                <td>Офисные приложения</td>
                <td>Платная</td>
                <td>EULA<br/><span style={{fontSize: '12px', color: 'var(--text-muted)'}}>На одно устройство</span></td>
                <td><span className="badge badge-success">Актуальный</span></td>
                <td>84</td>
              </tr>
              <tr>
                <td><b>Google Chrome 130</b><br/><span style={{fontSize: '12px', color: 'var(--text-muted)'}}>Google</span></td>
                <td>Браузеры</td>
                <td>Бесплатная</td>
                <td>Условия использования<br/><span style={{fontSize: '12px', color: 'var(--text-muted)'}}>Коммерческое использование</span></td>
                <td><span className="badge badge-success">Актуальный</span></td>
                <td>40</td>
              </tr>
              <tr>
                <td><b>WinRAR 5.90</b><br/><span style={{fontSize: '12px', color: 'var(--text-muted)'}}>win.rar GmbH</span></td>
                <td>Архиваторы</td>
                <td>Условно бесплатная</td>
                <td>EULA<br/><span style={{fontSize: '12px', color: 'var(--text-muted)'}}>Пробный период — 40 дней</span></td>
                <td><span className="badge badge-warning">Устаревший</span></td>
                <td>4</td>
              </tr>
              <tr>
                <td><b>AnyDesk 8.0</b><br/><span style={{fontSize: '12px', color: 'var(--text-muted)'}}>AnyDesk Software</span></td>
                <td>Удалённый доступ</td>
                <td>Условно бесплатная</td>
                <td>EULA<br/><span style={{fontSize: '12px', color: 'var(--text-muted)'}}>Бесплатно для личных целей</span></td>
                <td><span className="badge badge-danger">Запрещённый</span></td>
                <td>6</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}