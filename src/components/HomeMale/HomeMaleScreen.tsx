import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const HomeMaleScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      
      {/* 背景图片 */}
      <Image
        source={{ uri: 'https://via.placeholder.com/375x812' }}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      
      {/* 顶部角色信息区域 */}
      <View style={styles.topSection}>
        {/* 角色信息卡片 */}
        <View style={styles.characterCard}>
          <Image
            source={{ uri: 'https://via.placeholder.com/34x34' }}
            style={styles.avatar}
          />
          <View style={styles.characterInfo}>
            <View style={styles.nameRow}>
              <Text style={styles.characterName}>Noah</Text>
              <TouchableOpacity style={styles.dropdownButton}>
                <Text style={styles.dropdownIcon}>▼</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.followCount}>4000关注</Text>
          </View>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addIcon}>+</Text>
          </TouchableOpacity>
        </View>
        
        {/* 侧边栏菜单按钮 */}
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
      </View>
      
      {/* 简介卡片 */}
      <View style={styles.introCard}>
        <View style={styles.introContent}>
          <Text style={styles.introText}>
            情景简介{'\n'}
            两行字的样式绍情景介绍情景介绍情景介绍情景介绍情景介绍情景介绍情景介绍情景介
          </Text>
        </View>
        <TouchableOpacity style={styles.expandButton}>
          <Text style={styles.expandIcon}>⋮</Text>
        </TouchableOpacity>
      </View>
      
      {/* 底部区域 */}
      <View style={styles.bottomSection}>
        {/* 输入框 */}
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <Text style={styles.searchIcon}>🔍</Text>
            <TextInput
              style={styles.textInput}
              placeholder="发送消息给Noah"
              placeholderTextColor="rgba(228, 228, 231, 0.3)"
            />
          </View>
          <View style={styles.inputActions}>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionIcon}>🎤</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionIcon}>⚡</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionIcon}>⋯</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* 底部导航栏 */}
        <View style={styles.bottomNav}>
          <LinearGradient
            colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.6)', 'rgba(0,0,0,1)']}
            style={styles.navGradient}
          >
            <View style={styles.navContent}>
              <TouchableOpacity style={styles.navItem}>
                <Text style={[styles.navText, styles.activeNavText]}>首页</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.navItem}>
                <Text style={styles.navText}>消息</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.navItem}>
                <View style={styles.addNavButton}>
                  <Text style={styles.addNavIcon}>+</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.navItem}>
                <Text style={styles.navText}>动态</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.navItem}>
                <Text style={styles.navText}>我的</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
      </View>
      
      {/* Toast 提示 */}
      <View style={styles.toast}>
        <Text style={styles.toastText}>关注成功</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090B0F',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  characterCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(9, 9, 11, 0.2)',
    borderRadius: 21,
    paddingHorizontal: 4,
    paddingVertical: 4,
    paddingRight: 10,
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    marginRight: 8,
  },
  characterInfo: {
    marginRight: 16,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  characterName: {
    fontSize: 12,
    color: '#E4E4E7',
    marginRight: 1,
  },
  dropdownButton: {
    width: 12,
    height: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownIcon: {
    fontSize: 8,
    color: '#E4E4E7',
  },
  followCount: {
    fontSize: 10,
    color: '#BBBBBB',
  },
  addButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#E4E4E7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addIcon: {
    fontSize: 14,
    color: '#090B0F',
    fontWeight: 'bold',
  },
  menuButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: 'rgba(9, 9, 11, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    fontSize: 18,
    color: '#E4E4E7',
  },
  introCard: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: 'rgba(9, 9, 11, 0.6)',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  introContent: {
    flex: 1,
    marginRight: 16,
  },
  introText: {
    fontSize: 14,
    color: '#BBBBBB',
    lineHeight: 20,
    textAlign: 'justify',
  },
  expandButton: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  expandIcon: {
    fontSize: 16,
    color: '#E4E4E7',
  },
  bottomSection: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  inputContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: 'rgba(212, 212, 216, 0.2)',
    borderRadius: 24,
    paddingHorizontal: 12,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    fontSize: 16,
    color: '#E4E4E7',
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#E4E4E7',
    paddingVertical: 0,
  },
  inputActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
  actionIcon: {
    fontSize: 16,
    color: '#E4E4E7',
  },
  bottomNav: {
    height: 84,
  },
  navGradient: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  navContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 34,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 16,
    color: 'rgba(228, 228, 231, 0.5)',
    fontWeight: '500',
  },
  activeNavText: {
    color: '#E6BA4A',
  },
  addNavButton: {
    width: 42,
    height: 32,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'rgba(228, 228, 231, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addNavIcon: {
    fontSize: 18,
    color: 'rgba(228, 228, 231, 0.5)',
    fontWeight: 'bold',
  },
  toast: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -44 }, { translateY: -26 }],
    backgroundColor: 'rgba(39, 39, 42, 0.8)',
    borderRadius: 26,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  toastText: {
    fontSize: 14,
    color: '#F8FAFC',
    textAlign: 'center',
  },
});

export default HomeMaleScreen; 