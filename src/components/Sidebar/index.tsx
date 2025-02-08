"use client";
import React, { useState } from 'react'
import { AppBar, Drawer, ListItem, List, ListItemText, Toolbar, IconButton, useTheme, useMediaQuery, Typography, ListItemIcon, Divider, Avatar, Box } from '@mui/material'
import { LayoutDashboard, Settings, Users, FileText, Bell, LogOut, Menu, ChevronLeft, ChevronRight } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { sidebarStyles } from '@/styles/sidebar.styles';
import LogoutModal from '@/components/LogoutModal';

const DRAWER_WIDTH = 240;

const Sidebar = () => {
	const [open, setOpen] = useState(false);
	const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const router = useRouter();

	const menuItems = [
		{ text: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/dashboard' },
		{ text: 'Users', icon: <Users size={20} />, path: '/dashboard' },
		{ text: 'Reports', icon: <FileText size={20} />, path: '/dashboard' },
		{ text: 'Notifications', icon: <Bell size={20} />, path: '/dashboard' },
		{ text: 'Settings', icon: <Settings size={20} />, path: '/dashboard' }
	];

	return (
		<>
			<Box sx={sidebarStyles.container}>
				<Drawer
					variant={isMobile ? 'temporary' : 'permanent'}
					open={isMobile ? open : true}
					onClose={() => setOpen(false)}
					sx={sidebarStyles.drawer(theme, DRAWER_WIDTH)}
				>
					<Box sx={sidebarStyles.headerBox}>
						<Box sx={sidebarStyles.avatarContainer}>
							<Avatar sx={sidebarStyles.avatar}>S</Avatar>
							<Typography variant="subtitle1" sx={sidebarStyles.appTitle}>
								Shailesh Patil
							</Typography>
						</Box>
						{isMobile && (
							<IconButton onClick={() => setOpen(false)} sx={{ color: 'white' }}>
								{theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
							</IconButton>
						)}
					</Box>

					<Box sx={{ px: 2, pb: 2 }}>
						<ListItem sx={sidebarStyles.logoutButton(theme)} onClick={() => setIsLogoutModalOpen(true)}>
							<ListItemIcon sx={sidebarStyles.menuIcon}>
								<LogOut size={20} />
							</ListItemIcon>
							<ListItemText primary="Logout" />
						</ListItem>
					</Box>

					<Divider sx={sidebarStyles.divider} />

					<List sx={sidebarStyles.menuList}>
						{menuItems.map((item,index) => (
							<ListItem 
								key={item.text}
								onClick={() => router.push(item.path)}
                sx={[
									sidebarStyles.menuItem,
									index === 0 && sidebarStyles.activeMenuItem
								]}
							>
								<ListItemIcon sx={sidebarStyles.menuIcon}>{item.icon}</ListItemIcon>
								<ListItemText primary={item.text} />
							</ListItem>
						))}
					</List>
				</Drawer>

				<Box>
					<AppBar 
						position="fixed" 
						sx={sidebarStyles.appBar(theme, DRAWER_WIDTH, isMobile)}
					>
						<Toolbar sx={sidebarStyles.toolbar}>
							<Box sx={sidebarStyles.avatarContainer}>
								{isMobile && (
									<IconButton 
										color="inherit" 
										onClick={() => setOpen(true)} 
										sx={sidebarStyles.mobileMenuButton}
									>
										<Menu />
									</IconButton>
								)}
								<Typography variant="h6" sx={sidebarStyles.appTitle}>
									Dashboard
								</Typography>
							</Box>
							<IconButton size="small">
								<Bell size={20} />
							</IconButton>
						</Toolbar>
					</AppBar>
				</Box>
			</Box>

			<LogoutModal 
				open={isLogoutModalOpen}
				onClose={() => setIsLogoutModalOpen(false)}
			/>
		</>
	);
};

export default Sidebar;
