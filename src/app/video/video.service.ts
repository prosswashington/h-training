import { Injectable } from '@angular/core';

import { Video } from './video.model';

@Injectable()
export class VideoService {

    private acVideos: Video[] = [
        new Video("Getting Started with FactoryTalk® AssetCentre", "Covers adding files to AssetCentre in Design mode.", "5:24", "2dq4VAkl-98"),
        new Video("Introduction to FactoryTalk AssetCentre Archive", "Covers Archive functionality", "6:01", "94oF1YiN-PU"),
        new Video("Introduction to FactoryTalk AssetCentre Disaster Recovery", "An introduction to the Disaster Recovery functionality of FactoryTalk AssetCentre", "5:26", "cjlKdH5Ke2M"),
        new Video("Introduction to FactoryTalk AssetCentre Diagnostics", "How FactoryTalk Diagnostics are collected and presented using FactoryTalk AssetCentre", "4:14", "6Ma_MaYFhvQ"),
        new Video("Manage Asset Lifecycles using FactoryTalk AssetCentre", "Learn how FactoryTalk AssetCentre can be used to view the lifecycle status of your assets", "2:47", "XipveM02C08"),
        new Video("Introduction to FactoryTalk AssetCentre Database Size Monitoring", "An introduction to the database size monitoring functionality implemented in version 6.10 of FactoryTalk AssetCentre", "4:32", "muO_OaWqJYg")
    ];

    private ftVideos: Video[] = [
        new Video("Introduction to FactoryTalk Security - Configuring Account Options", "How to configure account options in the FactoryTalk Administration Console", "10:43", "NDIKq8XZACE"),
        new Video("Introduction to FactoryTalk Security - Creating Users", "How to create users in the FactoryTalk Administration Console", "5:55", "UdJHPII_pkg"),
        new Video("Rehosting FactoryTalk Activations", "How do I deactivate a FactoryTalk Activation license from my computer? How do I rehost an activation on a computer with Internet access?", "1:18", "Gq-dKK5Qq3g"),
        new Video("How to Activate Your Rockwell Software", "How to activate your newly purchased Rockwell Software utilizing the electronic delivery email for your order.", "1:56", "fQkoyBrRAKU")
    ];

    private rsLogixVideos: Video[] = [
        new Video("How to install and Update Drive AOP Files", "How to check what version Drive AOP files are installed on the local computer, how to download the latest version AOP files, and the process for installing those files.", "6:03", "JSMJ-duewkw"),
        new Video("How-to Series: Deleting a Program in RSLogix 5000", "This video goes through the steps in deleting a program within RSLogix 5000.", "1:04", "EgcktMFRqTw"),
        new Video("How to Series: Creating User Defined Data Types in RSLogix 5000", "This video demonstrates how to create a User Defined Data Type (UDT) in RSLogix 5000.", "0:49", "btLDPQugcIs"),
        new Video("PLC Sequencer Programming - Tutorial on SQI SQO Instructions in RSLogix 5000 Ladder Logic [Part 1]", "", "22:12", "hLXT8L5EbSI"),
        new Video("PLC Sequencer Programming - Tutorial on SQI SQO Instructions in RSLogix 5000 Ladder Logic [Part 2]", "", "16:19", "qL42Zn03B4I"),
        new Video("XIC & XIO Instructions in RSLogix 5000", "", "7:10", "uXmoDQOkCI4"),
        new Video("OTE | Output Energize Instruction in RSLogix 5000", "", "5:54", "BLHXWQVLqow"),
        new Video("OTL & OTU | Output Latch / Unlatch Instruction in RSLogix 5000", "", "5:35", "59niLNI5Glk"),
        new Video("ONS | One Shot Instruction in RSLogix Studio 5000", "", "8:08", "thiDAdyp2N4"),
        new Video("OSR OSF | One Shot Rising Falling Instructions RSLogix Studio 5000", "", "7:54", "IB_oFzgmrqs"),
        new Video("TON | Timer ON Instruction RSLogix Studio 5000", "", "7:31", "tL7k1-c2tTI"),
        new Video("TOF | Timer OFF Instruction RSLogix Studio 5000", "", "4:07", "_IWx2l9t5pU"),
        new Video("RTO | Retentive Timer ON Instruction RSLogix Studio 5000", "", "5:01", "V95xd5g0OZM"),
        new Video("CTD | Count DOWN Instruction RSLogix Studio 5000", "", "8:56", "n1gW1ZDbV94"),
        new Video("CTU | Count UP Instruction RSLogix Studio 5000", "", "7:42", "66xvSoXh1g0"),
        new Video("Equal Not Equal Instruction RSLogix Studio 5000", "", "7:07", "LYotHcIv5T4"),
        new Video("Greater Less Than Instruction RSLogix Studio 5000", "", "8:02", "U4Lr2e2VUB0"),
        new Video("Limit Test Instruction RSLogix Studio 5000", "", "6:04", "pgVwQZpF_Ac"),
        new Video("Masked Equal Instruction RSLogix Studio 5000", "", "7:19", "VxNU2WmGZpY"),
        new Video("Modulo Instruction RSLogix Studio 5000", "", "4:39", "EIVvxlQ6Oqs"),
        new Video("PLC Programming MSG Instruction - Send Data Between MicroLogix & CompactLogix PLCs Studio 5000 Guide", "", "16:17", "U8MjdLzEnMM"),
        new Video("Move Ladder Logic RSLogix Studio 5000 ", "", "6:37", "xGZ8jVliJsc"),
        new Video("Creating RSLogix 500 Emulator Environment, Going Online, Connecting to PLC", "", "9:34", "_bm2f7ffpHM"),
        new Video("PLC Input Output Mapping / Buffering | IO Addressing Basics in RSLogix Studio 5000 Allen Bradley", "", "11:13", "_WQjIgp6wmc"),
        new Video("Creating Alias Tags for PLC Input Output Modules Point IO Studio 5000", "", "11:05", "QHcoAYTctZs"),
        new Video("RSLogix 5000 Analog Input Programming | Wiring Scaling", "", "18:15", "XBCrpmIL-EA"),
        new Video("PLC Data Types & Structures - Allen Bradley PLC RSLogix 5000 Basics Programming BOOL INT DINT Arrays", "", "16:43", "NzaVq8th3hU")
    ];

    private SpVideos: Video[] = [
        new Video("ArchestrA 101 Part 1, System Platform for InTouch Users", "How to install System Platform, how to import your InTouch application into the IDE (Integrated Development Environment). How to Publish an InTouch Application from the IDE and finally how to deploy an InTouch App to a remote or local node.", "11:27", "pGtB7E4jBRc"),
        new Video("ArchestrA 101 Part 2 What is ArchestrA System Platform ?", "Explaining what ArchestrA system platform is.", "15:20", "c2aUn-bfjag"),
        new Video("ArchestrA 101 Part 3 System Platform Device Integration", "Overview of how device integration is done within System Platform.", "4:22", "h_sc908Zt3M"),
        new Video("ArchestrA Graphics Tips and Tricks Episode 1", "An introduction to the ArchestrA Graphics Tips and Tricks video series.", "7:44", "CS2tpzXKMs8"),
        new Video("ArchestrA Graphics Tips and Tricks Episode 2", "This episode will begin to break down the anatomy of an ArchestrA graphic and setup up a common understanding for further videos that will break these topics down into finer detail.", "7:27", "8J27v3hoG00"),
        new Video("ArchestrA Graphics Tips and Tricks Episode 3 - Connectors and Connection Points", "•	In this episode of ArchestrA Graphics Tips and Tricks we will introduce a feature that was added in InTouch 2014 R2; Connectors and Connection Points. Usage of connectors and connections points will greatly reduce the effort in building and maintaining process graphics with interconnecting lines.", "8:33", "BmkIztPPEtY"),
        new Video("ArchestrA Graphics Tips and Tricks Episode 4 - Symbols and Faceplates", "In this episode we will explore how to build symbols and faceplates on ArchestrA object standards. We will demonstrate how building standards can greatly shorten the application development effort.", "12:54", "g8CDbQnw3sA"),
        new Video("ArchestrA Graphics Tips and Tricks Episode 5 - Ten Tips in Ten Minutes", "This video will give you 10 powerful tips for improving your InTouch HMI application design. The tips in this video are: Tip 1: Data Driven Navigation Tip 2: Flat Icons Tip 3: Web Browser Tip 4: Custom Shapes Tip 5: Dynamic Symbol Size and Position Tip 6: Smooth Lines Tip 7: Resizable Pop-ups Tip 8: Toggling Symbols Details Tip 9: Launching External Applications Tip 10: New InTouch Demo", "10:00", "9AJPT4MiZnc"),
        new Video("Wonderware Operations Integration Servers - Installation and Configuration", "This video shows how simple it is to download, install and configure the new Operations Integration Servers (OI Servers).", "18:07", "2BrCj2LfIQ0"),
        new Video("Introducing Wonderware Operations Integration Servers", "Operations Integration Servers are the next generation of Wonderware Device Integration. Taking DAServers and DI objects to the next level of functionality. Alvaro Martinez, Portfolio Manager at Wonderware, introduces the benefits of the new OI Server Technology including more servers added to the catalog, increased scalability, improved robustness and communications uptime, migration friendliness with existing products, and last but not least, improved performance.", "5:54", "jjLEkgkE4VE"),
        new Video("Alarm Aggregation", "Brief explanation of the new alarm aggregation feature in 2014", "2:30", "oQr2xP2Xu3k"),
        new Video("InTouch 2014 Situational Awareness Design Elements", "This video will introduce a sampling of new Situational Awareness focused symbols and Wizards that are provided with Wonderware InTouch 2014.", "11:41", "aSBSLYx3rwA"),
        new Video("InTouch 2014 Situational Awareness Color Usage", "In this video we review some bad and good practices for color usage in HMI applications designed for better operator Situational Awareness.", "9:26", "DajpD5Xo3_U"),
        new Video("Situational Awareness Actionable Alarm Management", "This video demonstrates techniques for better Situational Awareness through Actionable Alarm Management.", "8:37", "-wBOp3cpqAo"),
        new Video("InTouch 2014 Situational Awareness Trend Usage", "In this video I offer a short introduction to modern usage techniques for real time trends to improve operator Situational Awareness. We also introduce the new Trend Pen graphic element that was added in InTouch 2014.", "6:37", "vmFppZBCxmw"),
        new Video("InTouch 2014 Situational Awareness Dashboard Tools", "In this video we take a look at using Dashboard Tools in Level 1 Displays to improve operator Situational Awareness.", "15:59", "wU0xqEYiS0o"),
        new Video("Situational Awareness Using Symbol Wizards", "In this video we shift gears and take a look at how to use the Situational Awareness Symbol Wizards provided with InTouch 2014.", "12:14", "JDUxJ4QWEgQ"),
        new Video("Situational Awareness by Wonderware", "A brief introduction to the concepts of Situational Awareness by Wonderware.", "1:26", "6E2oqmkv5h8"),
        new Video("Situational Awareness Leveraging Historical Data", "In this video we look into methods of using historical data in process graphics to improve the situational awareness of operations staff.", "12:25", "WmI3fRclaj8"),
        new Video("Situational Awareness Actionable Alarming Revisited", "This video is a follow up to the previous video on Actionable Alarm Management. It demonstrate usages for applying alarm sounds, alarm shelving as well as state based alarm suppression.", "9:00", "S_V-UbeF-c0")
    ];

    getAcVideos() {
        return this.acVideos.slice();
    }

    getFtVideos() {
        return this.ftVideos.slice();
    }

    getRslVideos() {
        return this.rsLogixVideos.slice();
    }

    getSpVideos() {
        return this.SpVideos.slice();
    }
}

