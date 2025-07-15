import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

interface HomePageProps {
  navigation?: any;
}

const HomePage: React.FC<HomePageProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#090B0F" />
      
      {/* 背景图片 */}
      <Image
        source={{ uri: 'https://via.placeholder.com/375x812/1a1a1a/ffffff?text=Background' }}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      
      {/* 状态栏区域 */}
      <View style={styles.statusBar}>
        <Text style={styles.statusBarTime}>9:41</Text>
        <View style={styles.statusBarIcons}>
          <View style={styles.signalIcon} />
          <View style={styles.wifiIcon} />
          <View style={styles.batteryIcon} />
        </View>
      </View>

      {/* 主要内容区域 */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 角色信息卡片 */}
        <View style={styles.characterCard}>
          <View style={styles.characterInfo}>
            <Image
              source={{ uri: 'https://via.placeholder.com/34x34/ff6b6b/ffffff?text=Nina' }}
              style={styles.avatar}
            />
            <View style={styles.characterDetails}>
              <View style={styles.nameRow}>
                <Text style={styles.characterName}>Nina</Text>
                <View style={styles.verifiedIcon}>
                  <Text style={styles.verifiedText}>✓</Text>
                </View>
              </View>
              <Text style={styles.followersCount}>3.2w关注</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.followButton}>
            <LinearGradient
              colors={['#E6BA4A', '#E2E64A', '#81DB62']}
              style={styles.followButtonGradient}
            >
              <Text style={styles.followButtonText}>+</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* 侧边栏菜单按钮 */}
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>

        {/* 简介卡片 */}
        <View style={styles.introCard}>
          <View style={styles.introContent}>
            <Text style={styles.introTitle}>情景简介</Text>
            <Text style={styles.introText} numberOfLines={4}>
              情景介绍情景介绍情景介绍情景介绍情景介绍情景介绍情景介绍情景介绍情景介绍情景介绍情景介绍情景介绍情景介绍情景介绍情景情景介绍情…
            </Text>
          </View>
          <View style={styles.introDecoration}>
            <LinearGradient
              colors={['#FD8B6A', '#FAFE66', '#C4DB62']}
              style={styles.decorationGradient}
            />
          </View>
        </View>

        {/* 输入框 */}
        <View style={styles.inputContainer}>
          <View style={styles.inputBox}>
            <Text style={styles.inputIcon}>💬</Text>
            <Text style={styles.inputPlaceholder}>发送消息给Nina</Text>
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
      </ScrollView>

      {/* 底部导航栏 */}
      <View style={styles.bottomBar}>
        <LinearGradient
          colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.6)']}
          style={styles.bottomBarGradient}
        />
        <View style={styles.navigationTabs}>
          <TouchableOpacity style={styles.tabItem}>
            <LinearGradient
              colors={['#E6BA4A', '#E2E64A', '#81DB62']}
              style={styles.activeTabIndicator}
            />
            <Text style={styles.activeTabText}>首页</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Text style={styles.tabText}>消息</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <View style={styles.tabIcon}>
              <Text style={styles.tabIconText}>📝</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Text style={styles.tabText}>动态</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Text style={styles.tabText}>我的</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Home Indicator */}
      <View style={styles.homeIndicator}>
        <View style={styles.homeIndicatorBar} />
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
    width: width,
    height: height,
    top: 0,
    left: 0,
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 5,
    zIndex: 10,
  },
  statusBarTime: {
    color: '#E4E4E7',
    fontSize: 14,
    fontWeight: '600',
  },
  statusBarIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  signalIcon: {
    width: 17,
    height: 10,
    backgroundColor: '#E4E4E7',
    borderRadius: 1,
  },
  wifiIcon: {
    width: 15,
    height: 11,
    backgroundColor: '#E4E4E7',
    borderRadius: 1,
  },
  batteryIcon: {
    width: 24,
    height: 11,
    backgroundColor: '#E4E4E7',
    borderRadius: 2,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  characterCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(9, 11, 15, 0.2)',
    borderRadius: 50,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginTop: 20,
    marginBottom: 20,
  },
  characterInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
  },
  characterDetails: {
    gap: 2,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  characterName: {
    color: '#E4E4E7',
    fontSize: 12,
    fontWeight: '500',
  },
  verifiedIcon: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#E4E4E7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  verifiedText: {
    color: '#090B0F',
    fontSize: 8,
    fontWeight: 'bold',
  },
  followersCount: {
    color: '#BBBBBB',
    fontSize: 10,
  },
  followButton: {
    width: 38,
    height: 28,
    borderRadius: 14,
    overflow: 'hidden',
  },
  followButtonGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  followButtonText: {
    color: '#090B0F',
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuButton: {
    position: 'absolute',
    right: 20,
    top: 20,
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: 'rgba(9, 11, 15, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuIcon: {
    color: '#E4E4E7',
    fontSize: 18,
    transform: [{ rotate: '180deg' }],
  },
  introCard: {
    backgroundColor: 'rgba(9, 11, 15, 0.6)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    position: 'relative',
    overflow: 'hidden',
  },
  introContent: {
    flex: 1,
  },
  introTitle: {
    color: '#E4E4E7',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
  },
  introText: {
    color: '#BBBBBB',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'justify',
  },
  introDecoration: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 100,
    height: 50,
    borderRadius: 12,
  },
  decorationGradient: {
    flex: 1,
    borderRadius: 12,
  },
  inputContainer: {
    backgroundColor: 'rgba(212, 212, 216, 0.2)',
    borderRadius: 24,
    paddingHorizontal: 12,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  inputBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  inputIcon: {
    fontSize: 16,
  },
  inputPlaceholder: {
    color: 'rgba(228, 228, 231, 0.3)',
    fontSize: 16,
    flex: 1,
  },
  inputActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  actionButton: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionIcon: {
    fontSize: 16,
    color: '#E4E4E7',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 84,
  },
  bottomBarGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 84,
  },
  navigationTabs: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: 50,
  },
  activeTabIndicator: {
    width: 4,
    height: 4,
    borderRadius: 2,
    marginBottom: 2,
  },
  activeTabText: {
    color: '#E6BA4A',
    fontSize: 16,
    fontWeight: '500',
  },
  tabText: {
    color: 'rgba(228, 228, 231, 0.5)',
    fontSize: 16,
    fontWeight: '500',
  },
  tabIcon: {
    width: 44,
    height: 36,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'rgba(228, 228, 231, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIconText: {
    fontSize: 16,
    color: 'rgba(228, 228, 231, 0.5)',
  },
  homeIndicator: {
    position: 'absolute',
    bottom: 8,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  homeIndicatorBar: {
    width: 134,
    height: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 2.5,
  },
});

export default HomePage; 