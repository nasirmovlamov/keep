import { SingleFormDataInterface } from "./AppInterface";

export interface QUESTION_INTERFACE {
    singleQuestionData:SingleFormDataInterface
    status:"idle" | "loading" | "failed"
}
