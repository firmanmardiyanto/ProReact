class BlurExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.timeOutId = null;

    this.onClickHandler = this.onClickHandler.bind(this);
    this.onBlurHandler = this.onBlurHandler.bind(this);
    this.onFocusHandler = this.onFocusHandler.bind(this);
  }

  onClickHandler() {
    this.setState((currentState) => ({
      isOpen: !currentState.isOpen,
    }));
  }

  // Kita menutup popover pada detik selanjutnya menggunakan setTimeout.
  // Ini perlu, karena kita harus memeriksa terlebih dahulu
  // apakah ada anak lain dari elemen ini yang telah menerima
  // fokus saat event blur diluncurkan sebelum event fokus yang baru.
  onBlurHandler() {
    this.timeOutId = setTimeout(() => {
      this.setState({
        isOpen: false,
      });
    });
  }

  // Jika ada anak yang menerima fokus, jangan tutup popover.
  onFocusHandler() {
    clearTimeout(this.timeOutId);
  }

  render() {
    // React membantu kita dengan melakukan bubbling
    // pada event blur dan fokus ke elemen induk.
    return (
      <div onBlur={this.onBlurHandler} onFocus={this.onFocusHandler}>
        <button
          onClick={this.onClickHandler}
          aria-haspopup="true"
          aria-expanded={this.state.isOpen}
        >
          Pilih salah satu opsi
        </button>
        {this.state.isOpen && (
          <ul>
            <li>Opsi 1</li>
            <li>Opsi 2</li>
            <li>Opsi 3</li>
          </ul>
        )}
      </div>
    );
  }
}

ReactDOM.render(<BlurExample/>, document.getElementById("root1"));
