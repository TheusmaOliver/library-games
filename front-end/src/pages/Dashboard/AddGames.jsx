import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";

const initialValue = {
  title: "",
  cover: "",
  description: "",
  year: "",
  score: "",
  trailer: "",
  gameplay: "",
  genrersIds: "",
};

export default function AddGames() {
  const [values, setValues] = useState(initialValue);
  const [genrer, setGenrer] = useState([]);

  const loadGenrer = async () => {
    await api
      .buildApiGetRequest(api.readAllGenrers())
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((response) => {
        setGenrer(response);
      })
      .catch(() => {
        console.log("Unauthorized");
      });
  };

  useEffect(() => {
    loadGenrer();
  }, []);
  const onChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = {
      ...values,
      year: +values.year,
      genrersIds: [+values.genrersIds],
    };
    console.log(payload);
    await api
      .buildApiPostRequest(api.registerGames(), payload)
      .then((response) => {
        if (response.status !== 201) {
          throw new Error(response);
        }
        toast.success("Jogo adicionado com sucesso!");
      })
      .catch(() => {
        toast.error("Deu erro no cadastro do jogo");
      });
  };
  return (
    <div className="createGames">
      <form className="createGames__form" onSubmit={handleSubmit}>
        <div className="createGames__form--box">
          <label htmlFor="title">Titulo</label>
          <input
            type="text"
            required
            name="title"
            value={values.title}
            onChange={onChange}
            id="title"
          />
        </div>
        <div className="createGames__form--box">
          <label htmlFor="cover">Capa</label>
          <input
            type="url"
            required
            name="cover"
            value={values.cover}
            onChange={onChange}
            id="cover"
          />
        </div>

        <div className="createGames__form--box">
          <label htmlFor="description">Descrição</label>
          <input
            type="text"
            required
            name="description"
            value={values.description}
            onChange={onChange}
            id="description"
          />
        </div>

        <div className="createGames__form--box">
          <label htmlFor="year">Ano de lançamento</label>
          <input
            type="number"
            required
            name="year"
            value={values.year}
            onChange={onChange}
            id="year"
          />
        </div>

        <div className="createGames__form--box">
          <label htmlFor="score">Nota</label>
          <input
            type="text"
            required
            name="score"
            value={values.score}
            onChange={onChange}
            id="score"
          />
        </div>

        <div className="createGames__form--box">
          <label htmlFor="trailer">Trailer</label>
          <input
            type="url"
            required
            name="trailer"
            value={values.trailer}
            onChange={onChange}
            id="trailer"
          />
        </div>

        <div className="createGames__form--box">
          <label htmlFor="gameplay">Gameplay</label>
          <input
            type="url"
            required
            name="gameplay"
            value={values.gameplay}
            onChange={onChange}
            id="gameplay"
          />
        </div>

        <div className="createGames__form--box">
          <label htmlFor="genrers">Genêro</label>
          <select
            name="genrersIds"
            onChange={onChange}
            value={values.genrersIds}
            id="genrersIds"
          >
            <option value="">Selecione uma opção</option>
            {genrer &&
              genrer.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
          </select>
        </div>

        <input type="submit" value="Add" />
      </form>
    </div>
  );
}
