import multer from 'multer';

//multer 라이브러리를 이용한 파일업로드
const storage = multer.diskStorage({
    // uploads 폴더에 이미지 저장
    
    destination: function (req, file, cb) {
        // destination 메서드의 역할은 업로드될 파일이 저장되는 디렉토리를 정의하는 것이다.
        // destination의 프로퍼티 값을 함수로 전달하고, 콜백함수는 3개를 받는데, req,file,cb를 받는다.
        // 이중 세번째 인자인 cb는 폴더에 업로드 할 수 있도록 해주는 함수이다.
        cb(null, 'uploads/') // 반드시 뒤에 /가 붙어야함 //업로드된 파일의 목적지 폴더 설정
        // cb 콜백함수의 첫번째 매개변수가 null인 이유는 에러 핸들링을 위한 것이다.
        // 성공적으로 작업을 수행했을 때는 에러를 null로 전달하고, 오류가 발생했을 때는 에러 객체를 전달한다.
        //에러가 null이 아닌 값으로 설정되면 multer는 해당 에러를 처리하고 업로드를 중단하게 됩니다. 
    },
    filename: function (req, file, cb) {
        // filename 메서드는 업로드될 파일의 이름을 지정해주는 메서드이다.
        // filename 함수 내부의 로직은 업로드된 파일에 대한 커스텀 파일명을 결정하고, 해당 파일명을 cb를 통해 multer에 전달합니다.
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)//후에 추가한 파일이 덮어쓰기됨으로, 파일이름에 난수를 붙임
        // 파일명을 랜덤으로 만들어주어 파일명이 중복되는 것을 막아준다.
        // cb(null, file.fieldname + '-' + uniqueSuffix)
        cb(null, uniqueSuffix + '_' + file.originalname)
        //cb의 인자로 1번째는 초기값, 두번째는 파일명이다.
    }

})

const fupload = multer({ storage: storage }).single('file');
// multer를 사용하여 파일 업로드를 처리하기 위한 설정을 생성하는 부분입니다.
// 특히, 단일 파일 업로드(single)에 대한 설정을 생성하고 있습니다.
// 'file'은 클라이언트에서 전송되는 파일 데이터가 포함된 필드의 이름을 나타냅니다.
// 이 부분은 클라이언트 측에서 파일을 업로드할 때 <input type="file" name="file" />와 같이 
// <input> 요소의 name 속성과 일치해야 합니다.

/**
 * 파일 업로드 : 파일을 /uploads 폴더에 저장하는 작업
 */
export function upload(req, res) {

    fupload(req, res, err => {
        //upload에서 image파일 받아서 fupload의 첫번째 매개변수로 전달하여 사용한다.
        //multer에서 만든 데이터를 fupload로 정의
        //fupload는 3개의 매개변수를 가지고 있고, req는 req.file.path등 파일의 정보가 담겨져있다.
        console.log("파일경로" + req.file.path);
        if (err) {
            console.log(err);
        } else {
            // console.log(`${JSON.stringify(res.req.file.path)}`);
            // res.json(res.req.file.path);
            res.json(res.req.file.path);
        }
    })

}

