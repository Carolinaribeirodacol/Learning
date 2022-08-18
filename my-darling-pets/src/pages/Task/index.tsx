import { useState } from "react";
import { NewTaskModal } from "../../components/TaskModal";
import { Container } from "./style";
import { Card } from "../../components/Card";
import { useGetTaskTypesQuery } from "../../graphql/generated";


export function Task() {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

  const { data } = useGetTaskTypesQuery();

  function handleCloseTaskModal() {
    setIsTaskModalOpen(false);
  }

  return (
    <Container>
      <div className="content">
        <div className="cards">
          {data?.taskTypes.map(taskType => {
            return (
              <>
                <NewTaskModal isOpen={isTaskModalOpen} onRequestClose={handleCloseTaskModal} title={taskType.name} />
                <Card img={taskType.img?.url} title={taskType.name} />
              </>
            );
          })}
        </div>
      </div>
    </Container>
  );
}