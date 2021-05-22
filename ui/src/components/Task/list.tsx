import * as S from "./style";

const List = ({ tasks }) => {
    return (<S.Base>
        <S.ListHeader>Tasks</S.ListHeader>
        {tasks.length ? (
            <S.ListContainer>
                {tasks.map(task => <S.ListItem key={task.id}>{task.title}</S.ListItem>)}
            </S.ListContainer>
        ) : <span style={{
            alignItems: 'center'
        }}>Nothing planned yet!</span>}

    </S.Base>)
}

export default List;