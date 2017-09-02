var searchIndex = {};
searchIndex["rpcap"] = {"doc":"This crate has functionality for reading and writing packet capture packet files in the traditional libpcap file format. There is no support for the newer pcapng file format.","items":[[3,"CapturedPacket","rpcap","The `CapturedPacket` struct contains information about a single captured packet.",null,null],[12,"time","","The time when the packet was captured.",0,null],[12,"data","","The contents of the packet (possibly truncated to `orig_len` bytes during capture). Depending on the `Linktype` of the capture, there might be completely different data in this packet. The user of this library is responsible for interpreting the contents correctly.",0,null],[12,"orig_len","","The size of the packet as it was on the wire. Might be larger than the size of `data`, in which case `data` was truncated and is incomplete.",0,null],[4,"Linktype","","Known identifiers for the types of packets that might be captured in a `pcap` file. This tells you how to interpret the packets you receive.",null,null],[13,"NULL","","",1,null],[13,"ETHERNET","","Ethernet packets",1,null],[13,"AX25","","",1,null],[13,"IEEE802_5","","",1,null],[13,"ARCNET_BSD","","",1,null],[13,"SLIP","","",1,null],[13,"PPP","","",1,null],[13,"FDDI","","",1,null],[13,"PPP_HDLC","","",1,null],[13,"PPP_ETHER","","",1,null],[13,"ATM_RFC1483","","",1,null],[13,"RAW","","IP packets (IPv4 or IPv6)",1,null],[13,"C_HDLC","","",1,null],[13,"IEEE802_11","","",1,null],[13,"FRELAY","","",1,null],[13,"LOOP","","",1,null],[13,"LINUX_SLL","","",1,null],[13,"LTALK","","",1,null],[13,"PFLOG","","",1,null],[13,"IEEE802_11_PRISM","","",1,null],[13,"IP_OVER_FC","","",1,null],[13,"SUNATM","","",1,null],[13,"IEEE802_11_RADIOTAP","","",1,null],[13,"ARCNET_LINUX","","",1,null],[13,"APPLE_IP_OVER_IEEE1394","","",1,null],[13,"MTP2_WITH_PHDR","","",1,null],[13,"MTP2","","",1,null],[13,"MTP3","","",1,null],[13,"SCCP","","",1,null],[13,"DOCSIS","","",1,null],[13,"LINUX_IRDA","","",1,null],[13,"USER00_LINKTYPE","","",1,null],[13,"USER01_LINKTYPE","","",1,null],[13,"USER02_LINKTYPE","","",1,null],[13,"USER03_LINKTYPE","","",1,null],[13,"USER04_LINKTYPE","","",1,null],[13,"USER05_LINKTYPE","","",1,null],[13,"USER06_LINKTYPE","","",1,null],[13,"USER07_LINKTYPE","","",1,null],[13,"USER08_LINKTYPE","","",1,null],[13,"USER09_LINKTYPE","","",1,null],[13,"USER10_LINKTYPE","","",1,null],[13,"USER11_LINKTYPE","","",1,null],[13,"USER12_LINKTYPE","","",1,null],[13,"USER13_LINKTYPE","","",1,null],[13,"USER14_LINKTYPE","","",1,null],[13,"USER15_LINKTYPE","","",1,null],[13,"IEEE802_11_AVS","","",1,null],[13,"BACNET_MS_TP","","",1,null],[13,"PPP_PPPD","","",1,null],[13,"GPRS_LLC","","",1,null],[13,"GPF_T","","",1,null],[13,"GPF_F","","",1,null],[13,"LINUX_LAPD","","",1,null],[13,"BLUETOOTH_HCI_H4","","",1,null],[13,"USB_LINUX","","",1,null],[13,"PPI","","",1,null],[13,"IEEE802_15_4","","",1,null],[13,"SITA","","",1,null],[13,"ERF","","",1,null],[13,"BLUETOOTH_HCI_H4_WITH_PHDR","","",1,null],[13,"AX25_KISS","","",1,null],[13,"LAPD","","",1,null],[13,"PPP_WITH_DIR","","",1,null],[13,"C_HDLC_WITH_DIR","","",1,null],[13,"FRELAY_WITH_DIR","","",1,null],[13,"IPMB_LINUX","","",1,null],[13,"IEEE802_15_4_NONASK_PHY","","",1,null],[13,"USB_LINUX_MMAPPED","","",1,null],[13,"FC_2","","",1,null],[13,"FC_2_WITH_FRAME_DELIMS","","",1,null],[13,"IPNET","","",1,null],[13,"CAN_SOCKETCAN","","",1,null],[13,"IPV4","","",1,null],[13,"IPV6","","",1,null],[13,"IEEE802_15_4_NOFCS","","",1,null],[13,"DBUS","","",1,null],[13,"DVB_CI","","",1,null],[13,"MUX27010","","",1,null],[13,"STANAG_5066_D_PDU","","",1,null],[13,"NFLOG","","",1,null],[13,"NETANALYZER","","",1,null],[13,"NETANALYZER_TRANSPARENT","","",1,null],[13,"IPOIB","","",1,null],[13,"MPEG_2_TS","","",1,null],[13,"NG40","","",1,null],[13,"NFC_LLCP","","",1,null],[13,"INFINIBAND","","",1,null],[13,"SCTP","","",1,null],[13,"USBPCAP","","",1,null],[13,"RTAC_SERIAL","","",1,null],[13,"BLUETOOTH_LE_LL","","",1,null],[13,"NETLINK","","",1,null],[13,"BLUETOOTH_LINUX_MONITOR","","",1,null],[13,"BLUETOOTH_BREDR_BB","","",1,null],[13,"BLUETOOTH_LE_LL_WITH_PHDR","","",1,null],[13,"PROFIBUS_DL","","",1,null],[13,"PKTAP","","",1,null],[13,"EPON","","",1,null],[13,"IPMI_HPM_2","","",1,null],[13,"ZWAVE_R1_R2","","",1,null],[13,"ZWAVE_R3","","",1,null],[13,"WATTSTOPPER_DLM","","",1,null],[13,"ISO_14443","","",1,null],[13,"RDS","","",1,null],[13,"USB_DARWIN","","",1,null],[4,"PcapError","","The error type for this crate.",null,null],[13,"Io","","An error that was returned by the underlying reader/writer.",2,null],[13,"InvalidPacketSize","","A packet could not be returned because it's size exceeds that specified in the pcap file header, or that of the target architecture's `usize`.",2,null],[13,"InvalidDate","","A packet could not be returned because it has an invalid timestamp.",2,null],[13,"InvalidFileHeader","","The pcap file header could not be parsed.",2,null],[11,"clone","","",1,{"inputs":[{"name":"self"}],"output":{"name":"linktype"}}],[0,"read","","Functionality for reading a packet capture.",null,null],[3,"PcapReader","rpcap::read","The `PcapReader` struct allows reading packets from a packet capture.",null,null],[11,"new","","Create a new `PcapReader` that reads the packet capture data from the specified `Reader`.",3,{"inputs":[{"name":"r"}],"output":{"name":"result"}}],[11,"get_linktype","","Returns the link type of this packet capture. See `Linktype` for the known values.",3,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[11,"get_snaplen","","Returns the maximum packet size. Packets larger than this usually get truncated to this size by the recording application.",3,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"next","","This function allows iterating over the packets in the packet capture, in a similar fashion to normal iterators. (The exact interface is unfortunately incompatible.)",3,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[0,"write","rpcap","Functionality for writing packet captures.",null,null],[3,"WriteOptions","rpcap::write","The options for creating a new packet capture file.",null,null],[12,"snaplen","","The maximum size of a packet that can be written to the file.",4,null],[12,"linktype","","The type of packets that will be written to the file. See `Linktype` for known values.",4,null],[3,"PcapWriter","","The `PcapReader` struct allows reading packets from a packet capture.",null,null],[11,"clone","","",4,{"inputs":[{"name":"self"}],"output":{"name":"writeoptions"}}],[11,"new","","Create a new `PcapWriter` that writes the packet capture data to the specified `Write`.",5,{"inputs":[{"name":"w"},{"name":"writeoptions"}],"output":{"name":"result"}}],[11,"append","","Create a new `PcapWriter` that appends the packets to an existing `Write`. If the `WriteOptions` specified here are different than those used to create the file, the resulting file will be invalid.",5,{"inputs":[{"name":"w"},{"name":"writeoptions"}],"output":{"name":"result"}}],[11,"write","","Write a package to the capture file.",5,{"inputs":[{"name":"self"},{"name":"capturedpacket"}],"output":{"name":"result"}}],[11,"flush","","Flushes the underlying writer.",5,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"take_writer","","Destroys this `PcapWriter` and returns access to the underlying `Write`.",5,{"inputs":[{"name":"self"}],"output":{"name":"w"}}],[11,"get_options","","The options used by this `PcapWriter`.",5,{"inputs":[{"name":"self"}],"output":{"name":"writeoptions"}}],[11,"eq","rpcap","",0,{"inputs":[{"name":"self"},{"name":"capturedpacket"}],"output":{"name":"bool"}}],[11,"ne","","",0,{"inputs":[{"name":"self"},{"name":"capturedpacket"}],"output":{"name":"bool"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","","",2,{"inputs":[{"name":"error"}],"output":{"name":"pcaperror"}}],[11,"from","","",2,{"inputs":[{"name":"systemtimeerror"}],"output":{"name":"pcaperror"}}],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",2,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"cause","","",2,{"inputs":[{"name":"self"}],"output":{"name":"option"}}]],"paths":[[3,"CapturedPacket"],[4,"Linktype"],[4,"PcapError"],[3,"PcapReader"],[3,"WriteOptions"],[3,"PcapWriter"]]};
initSearch(searchIndex);
