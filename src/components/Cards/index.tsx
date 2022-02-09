import { Container, Pagination, Close, ModalContainer, PTable } from "./styles";
import { api } from "../../services/api";
import React, { useEffect, useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "react-modal";

interface CharacterDetails {
  name: string;
  films: any[];
  shortFilms: any[];
  tvShows: any[];
  videoGames: any[];
  parkAttractions: any[];
  id: number;
  allies: any[];
  enemies: any[];
  imageUrl: string;
  url: string;
}

export function Cards() {
  const [characters, setCharacters] = useState<CharacterDetails[]>([]);
  const [person, setPerson] = useState<CharacterDetails>(
    {} as CharacterDetails
  );
  const [url, setUrl] = useState<string>("/");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);

  const [search, setSearch] = useState("");

  const filteredCharacters = characters.filter((item) =>
    item.name.startsWith(search.toUpperCase())
  );

  useEffect(() => {
    api.get(url).then((response) => {
      setTotalPages(response.data.totalPages);
      setCharacters(response.data.data);
    });
  }, [url, search]);

  function handlePage(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    let numberPage = event.currentTarget;
    setCurrentPage(Number(numberPage.textContent));

    setUrl(`?page=${numberPage.textContent}/`);
  }

  async function openModal(index: number) {
    setIsOpen(true);

    api.get(`${characters[index].url}`).then((response) => {
      setPerson(response.data);
    });
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Container>
        <form action="#">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        {filteredCharacters.map((character, index) => (
          <div key={index}>
            <div>
              <h1>{character.name}</h1>
              <InfoIcon onClick={() => openModal(index)} />
            </div>
            <img src={character.imageUrl} alt={character.name} />
          </div>
        ))}
        <Modal
          isOpen={modalIsOpen}
          ariaHideApp={false}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          style={{
            overlay: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(255, 255, 255, 0.75)",
            },
            content: {
              position: "absolute",
              top: "40px",
              left: "40px",
              right: "40px",
              bottom: "40px",
              border: "1px solid #ccc",
              background: "#fff",
              overflow: "auto",
              WebkitOverflowScrolling: "touch",
              borderRadius: "2rem",
              outline: "none",
              padding: "20px",
            },
          }}
        >
          <ModalContainer>
            <Close onClick={closeModal}>
              <CloseIcon style={{ fill: "black", fontSize: 32 }} />
            </Close>
            <h1>{person.name}</h1>

            <img src={person.imageUrl} alt={person.name} />
            <p>{person.id}</p>
            <PTable>
              <tr>
                <td>Nome</td>
                <td>{person.name}</td>
              </tr>
              <tr>
                <td>Filmes</td>
                <td>{`${person.films}`}</td>
              </tr>
              <tr>
                <td>Curta-metragens</td>
                <td>{`${person.shortFilms}`}</td>
              </tr>
              <tr>
                <td>Séries de TV</td>
                <td>{`${person.tvShows}`}</td>
              </tr>
              <tr>
                <td>Jogos Eletrônicos</td>
                <td>{`${person.videoGames}`}</td>
              </tr>
              <tr>
                <td>Atrações dos parques</td>
                <td>{`${person.parkAttractions}`}</td>
              </tr>
              <tr>
                <td>Aliados</td>
                <td>{`${person.allies}`}</td>
              </tr>
              <tr>
                <td>Inimigos</td>
                <td>{`${person.enemies}`}</td>
              </tr>
            </PTable>
          </ModalContainer>
        </Modal>
      </Container>
      <Pagination>
        <div>
          {Array.from(Array(totalPages), (item, index) =>
            index + 1 === currentPage ? (
              <>
                {currentPage > 2 ? (
                  <button onClick={handlePage}>{1}</button>
                ) : (
                  <></>
                )}
                {currentPage !== 1 ? (
                  <button onClick={handlePage}>{index}</button>
                ) : (
                  <></>
                )}
                <button disabled onClick={handlePage}>
                  {index + 1}
                </button>
                {currentPage !== totalPages ? (
                  <button onClick={handlePage}>{index + 2}</button>
                ) : (
                  <></>
                )}
                {currentPage < totalPages - 1 ? (
                  <button onClick={handlePage}>{totalPages}</button>
                ) : (
                  <></>
                )}
              </>
            ) : (
              <></>
            )
          )}
        </div>
      </Pagination>
    </>
  );
}
