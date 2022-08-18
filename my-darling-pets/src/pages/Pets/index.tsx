import { useGetPetSubscriberQuery } from "../../graphql/generated";
import { Container } from "./style";

export function Pets() {
  const { data } = useGetPetSubscriberQuery();

  console.log(data);

  return (
    <Container>
      <div className="content">
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Raça</th>
                <th>Idade</th>
                <th>Peso</th>
                <th>Altura</th>
              </tr>
            </thead>
            <tbody>
              {data?.subscriber?.pets.map(pet => {
                return (
                  <tr key={pet.id}>
                    <td>{pet.name}</td>
                    <td>{pet.breed}</td>
                    <td>{pet.age}</td>
                    <td>{pet.weight}</td>
                    <td>{pet.height}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

      </div>
    </Container>
  );
}