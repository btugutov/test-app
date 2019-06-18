
export class Question {
  constructor(
    public answer_bucket_id: Object = {},
    public answer_correct: Object = {},
    public answer_prompt: Object = {},
    public answer_soft_delete: Object = {},
    public answer_sort: Object = {},
    public base64: string = null,
    public display_type_description: string = '',
    public display_type_id: Number = null,
    public expected_response: string = '',
    public image: boolean = false,
    public point_value: number = 1,
    public prompt: string = '',
    public question_type_description: string = '',
    public question_type_id: number = null,
    public quiz_id: number = null,
    public quiz_name: string = '',
    public question_soft_delete: boolean = false,
    public question_sort: number = 1,
    public sort: number = 1,
    public topic: string = '',
    public topic_id: number = null,
    public training_module: string = '',
    public temp_bucket_storage: Object = {},
    public training_url: String = ''
  ) { }
}

