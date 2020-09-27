package cn.fudan.edu.se.LabWeb.controller;

import java.io.*;

import cn.fudan.edu.se.LabWeb.domain.*;
import cn.fudan.edu.se.LabWeb.service.LabService;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;


import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@RestController
public class LabController {

    @Resource
    private LabService labService;

    @RequestMapping("/r")
    public List<labMember> getByLabMemberNAME() {
        return labService.getlabMemberByNAME();
    }

    @RequestMapping("/getByLabMemberDoc")
    public List<labMember> getByLabMemberDoc() {
        return labService.getlabMemberByDoc();
    }

    @RequestMapping("/getByLabMemberPostGraduate")
    public List<labMember> getByLabMemberByPostGraduate() {
        return labService.getlabMemberByPostGraduate();
    }

    @RequestMapping("/getByLabMemberUnGraduate")
    public List<labMember> getByLabMemberByUnGraduate() {
        return labService.getlabMemberByUnGraduate();
    }

    @RequestMapping("/getByPaperInter")
    public List<ourPaper> getByPaperInter() {
        return labService.getPaperInter();
    }

    @RequestMapping("/getByPaperNation")
    public List<ourPaper> getByPaperNation() {
        return labService.getPaperNation();
    }

    @RequestMapping("/getByPaperTech")
    public List<ourPaper> getByPaperTech() {
        return labService.getPaperTech();
    }

    @RequestMapping("/getByPaperDegree")
    public List<degreePaper> getByPaperDegree() {
        return labService.getPaperDegree();
    }

    @RequestMapping("/getByActivity")
    public List<activity> getByActivity() {
        return labService.getAcitvity();
    }

    @RequestMapping("/getByActivityPicture")
    public List<activityPic> getActivityPic() {
        return labService.getActivityPic();
    }

    @RequestMapping("/getByGraduated")
    public List<graduated> getGraduated(@Param("GRADUATEDATE") String GRADUATEDATE) {
        return labService.getGraduated(GRADUATEDATE);
    }

    @RequestMapping("/getMemberByWay")
    public List<nowMember> getMemberByWay() {
        return labService.getMemberByWay();
    }

    @RequestMapping("/getNewsInfo")
    public List<newsInfo> getNewsInfo() {
        return labService.getNewsInfo();
    }

    @RequestMapping("/getAllNewsInfo")
    public List<newsInfo> getAllNewsInfo() {
        return labService.getAllNewsInfo();
    }

    @RequestMapping("/getNewsInfoPic")
    public List<newsInfoPic> getNewsInfoPic(@Param("NEWSID") String newsID) {
        return labService.getNewsInfoPic(newsID);
    }

    @RequestMapping("/insertNewsInfo")
    public String insertNewsInfo(@Param("title") String title, @Param("CONTENT") String CONTENT, @Param("ICON") String ICON, @Param("PUBDATE") String PUBDATE) {
        String text = "title:" + title + "___content:" + CONTENT + "___icon:" + ICON + "___pubdate" + PUBDATE;
        return labService.insertNewsInfo(title, CONTENT, ICON, PUBDATE);
    }


    @Controller
    public class MainController {




        /**
         * POST /uploadFile -> receive and locally save a file.
         *
         * @param uploadfile The uploaded file as Multipart file parameter in the
         * HTTP request. The RequestParam name must be the same of the attribute
         * "name" in the input tag with type file.
         *
         * @return An http OK status in case of success, an http 4xx status in case
         * of errors.
         */
        @RequestMapping(value = "/uploadFile", method = RequestMethod.POST)
        @ResponseBody
        public ResponseEntity<?> uploadFile(
                @RequestParam("uploadfile") MultipartFile uploadfile,@RequestParam("name")String name) {

            try {
                // Get the filename and build the local file path
                String filename = name;
                // Get newsPic Dir's path
                Path newsPicDir = Paths.get("./../../../../../../static/img/newsPic/");
//                String directory = "/home/fdse/apache-tomcat-8.5.38/webapps/LabWeb/WEB-INF/classes/static/img/newsPic/";
//                        "/usr/local/apache3day/webapps/LabWeb/WEB-INF/classes/static/img/newsPic/"
                String filepath = Paths.get(newsPicDir.toAbsolutePath().toString(), filename).toString();

                // Save the file locally
                BufferedOutputStream stream =
                        new BufferedOutputStream(new FileOutputStream(new File(filepath)));
                stream.write(uploadfile.getBytes());
                stream.close();
            }
            catch (Exception e) {
                System.out.println(e.getMessage());

                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
            return new ResponseEntity<>(HttpStatus.OK);
        } // method uploadFile

    } // class MainController


    @RequestMapping("/insertNewsInfoPic")
    public int insertNewsInfoPic(@Param("NEWSID")String NEWSID,@Param("FILENAME")String FILENAME) {
        System.out.println(NEWSID+" "+FILENAME);
        return labService.insertNewsInfoPic(NEWSID, FILENAME);
    }
//    @RequestMapping("/getByLabMemberTea")
//    public List<labMember> getByLabMemberByTea(){
//        return labMemberService.getlabMemberByTea();
//    }


}
