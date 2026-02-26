import { useState } from "react"; 
export default function Contact() {
  const [form, setForm] = useState({
    nama: "",
    pesan: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Pesan dari ${form.nama} berhasil dikirim 🚀`);
    setForm({ nama: "", pesan: "" });
  };

  return (
    <section className="section">
      <h2>Kontak</h2>

      <form className="form" onSubmit={handleSubmit}>
        <input
          name="nama"
          placeholder="Nama"
          value={form.nama}
          onChange={handleChange}
        />

        <textarea
          name="pesan"
          placeholder="Pesan"
          rows="5"
          value={form.pesan}
          onChange={handleChange}
        />

        <button type="submit">Kirim Pesan</button>
      </form>
    </section>
  );
}