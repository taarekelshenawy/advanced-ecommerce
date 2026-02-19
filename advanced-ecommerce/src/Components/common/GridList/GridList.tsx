import {  Col } from "react-bootstrap";

type GridProps<T>={
    records:T[],
    renderItem:(item:T)=>React.ReactNode;
}
type HasId={
    id:number,
}
export default function GridList<T extends HasId>({records,renderItem}:GridProps<T>) {
     
    return (
            <>
            {
            records.map((record)=>{
                return(
                <Col xs={6} key={record.id}  md={3} className="d-flex justify-content-center mb-5 mt-2">
                    {renderItem(record)}
                </Col>

                )
            })
            }
            </>
)
}
