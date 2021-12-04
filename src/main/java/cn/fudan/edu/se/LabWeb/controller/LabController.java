package cn.fudan.edu.se.LabWeb.controller;

import cn.fudan.edu.se.LabWeb.domain.News;
import cn.fudan.edu.se.LabWeb.domain.NewsPicture;
import cn.fudan.edu.se.LabWeb.domain.LabMember;
import cn.fudan.edu.se.LabWeb.domain.Paper;
import cn.fudan.edu.se.LabWeb.service.LabService;
import org.apache.ibatis.annotations.Param;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import javax.annotation.Resource;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.io.*;

@RestController
public class LabController {

    @Resource
    private LabService labService;

    @RequestMapping("/getLabMemberByGroup")
    public List<LabMember> getLabMemberByGroup() {
        return labService.getLabMemberByGroup();
    }

    @RequestMapping("/getAllNews")
    public List<News> getAllNews() {
        return labService.getAllNews();
    }

    @RequestMapping("/getNewsPicture")
    public List<NewsPicture> getNewsPicture(@Param("newsId") String newsId) {
        return labService.getNewsPicture(newsId);
    }

    @RequestMapping("/getAllPaper")
    public List<Paper> getAllPaper() {
        return labService.getAllPaper();
    }

    @RequestMapping("/getNewsWithLimit")
    public List<News> getNewsWithLimit() {
        return labService.getNewsWithLimit(6);
    }









    @RequestMapping("/insertNewsInfo")
    public String insertNewsInfo(@Param("title") String title, @Param("CONTENT") String CONTENT, @Param("ICON") String ICON, @Param("PUBDATE") String PUBDATE) {
        return labService.insertNewsInfo(title, CONTENT, ICON, PUBDATE);
    }

    @Controller
    public static class MainController {
        Logger logger = LoggerFactory.getLogger(MainController.class);

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
        public ResponseEntity<?> uploadFile(@RequestParam("uploadfile") MultipartFile uploadfile, @RequestParam("name") String name) {
            try {
                Path newsPicDir = Paths.get("./src/main/resources/static/img/newsPic");
                String filepath = Paths.get(newsPicDir.normalize().toAbsolutePath().toString(), name).toString();
                BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(filepath));
                stream.write(uploadfile.getBytes());
                stream.close();
            }
            catch (Exception e) {
                logger.error(e.getMessage());
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }

    @RequestMapping("/insertNewsInfoPic")
    public int insertNewsInfoPic(@Param("NEWSID") String NEWSID, @Param("FILENAME") String FILENAME) {
        System.out.println(NEWSID + " " + FILENAME);
        return labService.insertNewsInfoPic(NEWSID, FILENAME);
    }
}
